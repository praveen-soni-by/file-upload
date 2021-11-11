import Icon from "./svg/Icon";

export default function Alert({ message, isError }: any) {
  if (!message) return <></>;

  return (
    <div
      className={` ${isError ? "bg-red-200" : "bg-green-200"
        }  rounded-md p-2 flex h-10	`}
    >
      {isError ? <Icon.CircleCross /> : <Icon.CircleCheck />}

      <div className="text-gray-600 font-medium  self-center">
        {message}
      </div>
    </div>
  );
}
