import { Container } from "react-bootstrap";
import moment from 'moment';
import { AiOutlineHeart } from 'react-icons/ai'

export default function Article(props) {
    console.log("selected", props.selectedArticle)
    return (
        <Container>
            <div>
                {
                    props.selectedArticle.map(data =>
                        <div>
                            <div>
                                <h3>{data.title}</h3>
                                <div className='flex flex-col'>
                                    <span>{data.author.username}</span>
                                    <span>{moment(data.createdAt).format("MMMM D, YYYY")}</span>
                                </div>
                                <div className='flex items-center text-emerald-500 m-4'>
                                    <AiOutlineHeart />
                                    <span>Favorite Article(
                                        <span className='border-solid border-emerald-600 '>{data.favoritesCount}</span>
                                        )</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}