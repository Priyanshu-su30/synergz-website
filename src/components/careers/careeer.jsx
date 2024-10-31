import './career.css';
import workimg from '../img/work-bg.jpeg';
import workimg1 from '../img/work-bg1.jpeg';
import workimg2 from '../img/workspace.jpeg';


function career(){
    return(
        <>
            <div class="background">
            <div class="centering">
                <div class="articles">
                    <article>
                        <figure>
                            <img
                                src={workimg}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Full Stack Intern</h3>
                                <button>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                    <article>            
                        <figure>
                            <img
                                src={workimg1}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Java Developer</h3>
                                <button className='apply-btn'>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                    <article>
                        <figure>
                            <img
                                src={workimg2}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Python Developer</h3>
                                <button>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                    <article>
                        <figure>
                            <img
                                src={workimg1}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Senior Product Manager – AI Networking Orchestration</h3>
                                <button>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                    <article>            
                        <figure>
                            <img
                                src={workimg}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Senior System Software Engineer Platform - OpenBMC</h3>                            
                               <button>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                    <article>
                        <figure>
                            <img
                                src={workimg2}
                                alt="Preview"
                            />
                        </figure>
                        <div class="article-preview">
                            <h3>Senior Product Architect, Cloud Native</h3>
                                <button className='apply-btn'>
                                    Apply
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>

                                    </div>
                                </button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        </>
    )
}

export default career;