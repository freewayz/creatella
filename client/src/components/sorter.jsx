import React from 'react';

class Sorter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOptions: [
                { id: 'size', text: 'Size' },
                { id: 'price', text: 'Price' },
                { id: 'id', text: 'Font Ids' }
            ],
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        const selectedItem = e.target.value;
        // call the sortAction callback which is a props 
        // from the Products components
        this.props.sortAction(selectedItem);
    }


    render() {
        const { state } = this;
        return (
            <div className="sorter">
                <span className="title">
                    Sort Product By: 
                </span>
                {
                    state.sortOptions.map((item, index) => {
                        return (
                            <div className="action">
                                <label>
                                    <input type="radio" value={item.id} onChange={this.handleSelectChange} name="sort" />
                                    {item.text}
                                </label>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default Sorter;