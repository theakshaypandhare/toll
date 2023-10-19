import "./stories.scss";

const Stories = () => {
    const stories = [{
        id: 1,
        name: "akshay",
        img: "https://picsum.photos/200/300",
    }, {
        id: 1,
        name: "akshay",
        img: "https://picsum.photos/200/300",
    }, {
        id: 1,
        name: "akshay",
        img: "https://picsum.photos/200/300",
    }, {
        id: 1,
        name: "akshay",
        img: "https://picsum.photos/200/300",
    }, {
        id: 1,
        name: "akshay",
        img: "https://picsum.photos/200/300",
    }]
    return (
        <div className="stories">
            {stories.map(story => (
                <div className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;
