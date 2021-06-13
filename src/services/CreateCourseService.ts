interface ICreateCourse {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration = 8, educator }: ICreateCourse) {
    console.log(name, duration, educator);
  }
}

export default CreateCourseService;
