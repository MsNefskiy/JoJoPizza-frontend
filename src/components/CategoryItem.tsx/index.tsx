interface CategoryItemProps {
  children?: JSX.Element | JSX.Element[];
  name: string;
}

export default function CategoryItem({ name, children }: CategoryItemProps) {
  return (
    <>
      {children}
      <span>{name}</span>
    </>
  );
}
