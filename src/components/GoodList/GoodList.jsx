import "./GoodList.scss";

export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map((good) => (
      <div className="GoodCard" key={good.id} style={{ color: good.color }}>
        {good.name}

        <input type="text" />
      </div>
    ))}
  </div>
);
