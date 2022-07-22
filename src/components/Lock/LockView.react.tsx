import { useLockContext } from "components/Lock/LockContext";
import { useTheme } from "hooks";
import { Button, Checkbox } from "ui";
import { ButtonColor } from "ui/Button/Button.react";

type LockViewProps = Readonly<{}>;

const LockView = ({}: LockViewProps) => {
  const { theme } = useTheme();
  const { isStaking, setIsStaking, setIsEarning, isEarning } = useLockContext();

  return (
    <>
      <div className="flex mt-4">
        <div className="flex items-center mr-4">
          <Checkbox
            isChecked={isStaking}
            onClick={() => setIsStaking(!isStaking)}
          />
          <span className="ml-2">Stake</span>
        </div>
        <div className="flex items-center">
          <Checkbox
            isChecked={isEarning}
            onClick={() => setIsEarning(!isEarning)}
          />
          <span className="ml-2">Earn</span>
        </div>
      </div>
      <div className="mt-6 w-full flex">
        <Button
          textClassName="text-lg"
          className="px-2 py-4 mr-1 w-full text-center justify-center"
          color={theme === "light" ? ButtonColor.black : ButtonColor.white}
        >
          Approve
        </Button>
        <Button
          textClassName="text-lg"
          className="px-2 py-4 ml-1 w-full text-center justify-center"
          color={theme === "light" ? ButtonColor.black : ButtonColor.white}
        >
          Lock
        </Button>
      </div>
    </>
  );
};

export { LockView };
