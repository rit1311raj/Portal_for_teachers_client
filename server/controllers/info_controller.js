import Teacher from "../model/teacher_schema.js";

export const GetAllInfos = async (req, res) => {
  try {
    let infos = await Teacher.find({});
    res.status(200).json(infos);
  } catch (error) {
    console.log(error.messsage);
    res.status(500).json(error);
  }
};

export const GetInfo = async (request, response) => {
  try {
    let info = await Teacher.find({UANNumber : request.params.UANNumber});
    console.log("Data extracted successfully",info);
    response.status(200).json(info);
  } catch (error) {
    console.log(error.messsage);
    response.status(500).json(error);
  }
};
