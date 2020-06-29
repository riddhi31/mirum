import React, { Component } from 'react';

class StringParser extends Component {
	state = {
		isLoading: true,
		isShortText: false,
		shortContent: null,
		hasNoContent: false
	}
	componentDidMount() {
		this.calculateText(this.props.content, this.props.contentLength);
	}
	componentDidUpdate(prevProps) {
		prevProps.content !== this.props.content && this.calculateText(this.props.content, this.props.contentLength);
		console.log(prevProps);
	}
	calculateText = (content, contentLength) => {
		if (!content || content === "") {
			return this.setState({ isLoading: false, hasNoContent: true })
		}
		let isShortText = false, newContent = null;

		if (content.length > contentLength) {
			isShortText = true;
			newContent = content.substring(0, contentLength);
		}
		this.setState({
			isLoading: false,
			isShortText: isShortText,
			shortContent: newContent
		});
	}
	render() {
		if (this.state.isLoading || this.state.hasNoContent) return false;
		if (this.state.shortContent) {
			return (
				<div className={"read-more-outer"} style={{ width: '100%', wordWrap: 'break-word' }}>
					<span className={'read-more-inner'} dangerouslySetInnerHTML={{ __html: this.state.isShortText ? this.state.shortContent : this.props.content }}></span>
					{this.state.isShortText ?
						<span className='text-20 read-txt' onClick={() => { this.setState({ isShortText: false }) }}>Read More . . .</span>
						:
						<div className='text-20 read-txt' onClick={() => { this.setState({ isShortText: true }) }}>Show less . . .</div>}
				</div>
			)
		} else {
			return (
				<div className={"read-more-outer"} style={{ width: '100%', wordWrap: 'break-word' }}>
					<span className={"read-more-inner"} dangerouslySetInnerHTML={{ __html: this.props.content }}></span>
				</div>
			)
		}

	}


}

StringParser.defaultProps = {
	charLimit: 800
}


export default StringParser;