// import {useState} from 'react'
import utils from '../utils'
import {useState} from 'react'
const Main = (BodyProps) => {
  console.log('데이터 테스트 ==>', utils.clone(BodyProps));
  const [state, setState] = useState("박준수");

  const handleName = (e) => { setState(e.currentTarget.value); }

  return (<>
      <div>
          <input name="name" value={state} onChange={handleName} placeholder="이름"/>
      </div>
  </>);
}

export default Main;