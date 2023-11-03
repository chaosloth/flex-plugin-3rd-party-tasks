import CustomTaskListHeader from "./CustomTaskListHeader";
import CustomTaskListItem from "./CustomTaskListItem";

const CustomTaskList = (): JSX.Element | null => {
  return (
    <>
      <CustomTaskListHeader />
      <CustomTaskListItem />
      <CustomTaskListItem />
      <CustomTaskListItem />
    </>
  );
};

CustomTaskList.displayName = "3rdPartyTasks";

export default CustomTaskList;
