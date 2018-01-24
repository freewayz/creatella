import React from 'react';

class Sorter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOptions: [
                { id: 'size', text: 'By Size' },
                { id: 'price', text: 'By Price' },
                { id: 'id', text: 'By Font Ids' }
            ]
        }
    }


    render() {
        const { state } = this;
        return (
            <div className="sorter">
                <div className="action">
                    <select> 
                        {
                            state.sortOptions.map((item, index) => {
                                return (
                                    <option value={item.id}>
                                        { item.text }
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Sorter;