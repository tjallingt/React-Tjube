import React from 'react';
import VideoListItem from './VideoListItem';
 
export default class VideoList extends React.Component {
	static propTypes = {
		list: React.PropTypes.array.isRequired,
		onClickVideo: React.PropTypes.func
	};

	static defaultProps = {
		onClickVideo: () => {}
	};

	constructor(props) {
		super(props);
	}

	render() {
		let list = [];
		const styles = {
			list: {
				listStyleType: "none"
			}
		};

		Object.assign(styles.list, this.props.style);

		this.props.list.forEach((item) => {
			list.push(
				<VideoListItem 
					key={item.id}
					video={item}
					onClickVideo={this.props.onClickVideo}
					onClickDelete={this.props.onClickDelete}
					showThumbnail={this.props.showThumbnails}
					thumbnailQuality={this.props.thumbnailQuality}
				/> 
			);
		});

		return(
			<ul id={this.props.id} style={styles.list}>
				{list}
			</ul>
		);
	}
}

