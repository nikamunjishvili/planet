const Planet_interactive_info_block = ({
  onClick,
  bgColor,
  numeric,
  value,
}: Planet_interactive_info_block_Props) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className="interactive_info_block"
    >
      <span>{numeric}</span>
      <p>{value}</p>
    </div>
  );
};

export default Planet_interactive_info_block;
