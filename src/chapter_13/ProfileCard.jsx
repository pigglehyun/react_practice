import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title = "Seung Lee" backgroundColor = "green">
            <p>안녕하세요, 피글입니다.</p>
            <p>저는 리액트를 배우고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;