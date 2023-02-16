export const isError = (state) => state.isError;
export const getErrMessage = (state) => state.errMessage;
export const selectClasses = (state) => state.classes.data;
export const areClassesLoading = (state) => state.classes.isLoading;
export const selectLessonsByClassId = (state) => state.lessons.data;
export const areLessonsLoading = (state) => state.lessons.isLoading;