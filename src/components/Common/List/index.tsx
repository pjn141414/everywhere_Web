type ListProps = {
  className?: string;
}

export const List = ({
  className,
}: ListProps) => {

  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}