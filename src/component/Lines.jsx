export function Line() {
  return (
    <hr className="absolute inset-0 left-[33px] h-[6px] w-[128px] border-none bg-gradient-to-t from-bgGradiant1 via-bgGradiant2 to-bgGradiant3 sm:top-[173px] sm:left-0 sm:h-[50%] sm:w-[6px]" />
  );
}

export function FullLine() {
  return (
    <hr className="absolute inset-0 h-[6px] w-full border-none bg-gradient-to-t from-bgGradiant1 via-bgGradiant2 to-bgGradiant3" />
  );
}