import React from 'react'

export default class ResultTable extends React.Component {
    
    
    constructor(props) {
        super(props)
    };  

    componentDidMount(){
        this.props.getAllResluts()
    };
    
     getRows(){
       let rows = [];  
       var resInfo = {}  
       let result = this.props.studResult.result;
       if(result){
            result.forEach( res => { 
                rows.push(
                    <tr>
                    <td>{res.firstName}</td>
                    <td>{res.lastName}</td>
                    <td>{(res.marks.english + res.marks.hindi + res.marks.mathematics)/3}</td>
                    </tr>  
                )
            })
        }
        return rows;
    }

    render() {   
        let  rows  = this.getRows();
        return (
        <div>
        <form >
        <h1>RESULTS</h1>
         <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Percentage</th>
                </tr>
                {rows}
         </tbody>                  
         </table>
        </form>
        </div>
        );
    }
  }
