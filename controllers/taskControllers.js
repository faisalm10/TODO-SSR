import Task from "../models/Task.js";

//@desc   create task
//@path   /api/v1/tasks
//@access Public

export const postTask = async (req, res) => {
  try {
    await Task.create({
      task: req.body.task,
    });
    req.flash("message", "New Task Added");
    res.redirect("/api/v1/tasks");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//@desc   get tasks
//@path   /api/v1/tasks
//@access Public

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    const message = req.flash("message");
    res.render("home", { tasks, message });
    // res.status(200).json({
    //     status:"Success",
    //     message:"tasks fetched successfully",
    //     tasks
    // })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//@desc   get task
//@path   /api/v1/tasks/:id
//@access Public

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const message = req.flash("message");
    res.render("update", { task });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//@desc   update task
//@path   /api/v1/tasks/:id
//@access Public

export const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(
      req.params.id,
      { task: req.body.task },
      { new: true }
    );
    req.flash("message", "Task Updated");
    // res.status(200).json({
    //     status:"Success",
    //     message:"task updated successfully",
    //     task
    // })
    res.redirect("/api/v1/tasks");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//@desc   delete task
//@path   /api/v1/tasks/:id
//@access Public

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    req.flash("message", "Task Deleted");

    res.redirect("/api/v1/tasks");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
