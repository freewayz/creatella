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
            selectedAction: null,
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        const selectedItem = e.target.value;
         this.setState({selectedAction: selectedItem});
         // call the sortAction callback which is a props 
         // from the Products components
         this.props.sortAction(selectedItem);
    }


    render() {
        const { state } = this;
        return (
            <div className="sorter">
                <div className="action">
                    <label htmlFor="">Sort By</label>
                    <select 
                    value={state.selectedAction}
                    onChange={this.handleSelectChange}
                    > 
                        <option value="" selected disabled>Choose</option>
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