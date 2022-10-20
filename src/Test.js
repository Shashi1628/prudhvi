import "./style/style.css"
import { useNavigate } from 'react-router-dom';
export default function Test(){
   
  
    return<>
        <div className="box1">
            <label>Heading1</label>
            <label>Heading2</label>
        </div>
        <sample a="1" b="20"/>
        <sample a="2" b="30"/>
        <sample a="3" b="40"/>
    </>
}
function Sample({a,b}) {
    return<>
        <div className="row">
            <label>sample{a}</label>
            <label>{b}</label>
        </div>
    </>

}