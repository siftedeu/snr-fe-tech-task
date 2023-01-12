type TwoColumnProps = {
  col1: any;
  col2: any;
  containerClassNames?: string;
  reverseLayout?: boolean;
};

const TwoColumn = ({
  col1,
  col2,
  containerClassNames,
  reverseLayout = false,
}: TwoColumnProps) => {
  return (
    <div
      className={`flex w-100 flex-col justify-around md:flex-row ${containerClassNames}`}
    >
      {!reverseLayout ? (
        <>
          {col1}
          {col2}
        </>
      ) : (
        <>
          {col2}
          {col1}
        </>
      )}
    </div>
  );
};

export default TwoColumn;
