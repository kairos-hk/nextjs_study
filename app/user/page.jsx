export default function List() {
  let 유저 = ['kairos.hk','dia','homin']
    return (
      <div>
        <h4 className="usertitle">user list</h4>
        <div className="user">
          <h4>{ 유저[0] }</h4>
        </div>
        <div className="user">
          <h4>{ 유저[1] }</h4>
        </div>
        <div className="user">
          <h4>{ 유저[2] }</h4>
        </div>
      </div>
    )
  }