import Reminder from "../models/Reminder.js";

export async function createReminder(req, res) {
  const { title, description, date, time, status } = req.body;

  const reminder = await Reminder.create({
    user: req.userId,
    title,
    description,
    date,
    time,
    status
  });

  return res.status(201).json(reminder);
}

export async function listReminders(req, res) {
  const reminders = await Reminder.find({
    user: req.userId
  }).sort({
    date: 1,
    time: 1
  });

  return res.json(reminders);
}

export async function updateReminder(req, res) {
  const reminder = await Reminder.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.userId
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!reminder) {
    return res.status(404).json({
      message: "Lembrete não encontrado"
    });
  }

  return res.json(reminder);
}

export async function deleteReminder(req, res) {
  const reminder = await Reminder.findOneAndDelete({
    _id: req.params.id,
    user: req.userId
  });

  if (!reminder) {
    return res.status(404).json({
      message: "Lembrete não encontrado"
    });
  }

  return res.json({
    message: "Lembrete excluído com sucesso"
  });
}