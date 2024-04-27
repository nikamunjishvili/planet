const Planet_facts = ({ parameter, fact }: Planet_facts_Props) => {
  return (
    <div className="fact_container">
      <p>{parameter}</p>
      <h2>{fact}</h2>
    </div>
  );
};

export default Planet_facts;
