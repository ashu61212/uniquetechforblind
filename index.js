function msg(content) {
    var element = document.querySelector('p[role="alert"]');
    if (element) {
        element.innerHTML = content;
        element.style.backgroundColor = '#e6f4ea';
        element.style.color = '#2e8540';
        element.style.border = '1px solid #c2e4c1';
        element.style.padding = '10px';
        element.style.borderRadius = '4px';
        element.style.fontSize = '14px';
        element.style.margin = '10px 0';
        element.style.transition = 'opacity 0.5s';

        setTimeout(() => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.innerHTML = "";
                element.style.opacity = '1';
            }, 500);
        }, 9000);
    }
}
async function copy(text){
try{
navigator.clipboard.writeText(text);
}
catch(error){
console.log(error);
}
}
function share(content) {
    const shareString = `
    <h2>Share</h2>
    <div class="button-grid">
        <button onclick="shareWhatsApp('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="icon"> WhatsApp</button>
        <button onclick="shareTelegram('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" class="icon"> Telegram</button>
        <button onclick="shareFacebook('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="icon"> Facebook</button>
        <button onclick="shareTwitter('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" class="icon"> Twitter</button>
        <button onclick="shareLinkedIn('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" class="icon"> LinkedIn</button>
        <button onclick="shareReddit('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Reddit.svg" alt="Reddit" class="icon"> Reddit</button>
        <button onclick="sharePinterest('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" class="icon"> Pinterest</button>
        <button onclick="shareTumblr('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tumblr_Logos_2018.png" alt="Tumblr" class="icon"> Tumblr</button>
        <button onclick="shareVK('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="VK" class="icon"> VK</button>
        <button onclick="shareEmail('${content}')" class="share-button"><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/New_Logo_Gmail.svg" alt="Email" class="icon"> Email</button>
    </div>
    `;

    const styleString = `
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
        }
        
        #shareContainer {
            padding: 20px;
            text-align: center;
            background-color: #000;
            border-radius: 10px;
            border: 1px solid #444;
            max-width: 600px;
            margin: auto;
        }
        
        #shareContainer h2 {
            margin-bottom: 20px;
            color: #fff;
        }

        .button-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            justify-items: center;
        }
        
        .share-button {
            background-color: #333;
            color: white;
            border: none;
            padding: 20px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
            width: 100%;
        }
        
        .share-button:hover {
            background-color: #555;
        }

        .icon {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }
    </style>
    `;

    const shareDiv = document.createElement('div');
    shareDiv.setAttribute('id', 'shareContainer');
    shareDiv.innerHTML = styleString + shareString;

    const shareContainer = document.getElementById('shareDiv');
    shareContainer.innerHTML = '';
    shareContainer.appendChild(shareDiv);
}

function shareWhatsApp(content) {
    const url = content;  
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
}

function shareTelegram(content) {
    const url = content;  
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(url)}`);
}

function shareFacebook(content) {
    const url = content;  
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
}

function shareTwitter(content) {
    const text = 'Check this out!';     
    const url = content;  
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
}

function shareLinkedIn(content) {
    const url = content;  
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
}

function shareReddit(content) {
    const url = content;  
    window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(url)}`);
}

function sharePinterest(content) {
    const url = content;  
    const description = 'Check this out!';  
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`);
}

function shareTumblr(content) {
    const url = content;  
    const title = 'Check this out!';    
    window.open(`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`);
}

function shareVK(content) {
    const url = content;  
    window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}`);
}

function shareEmail(content) {
    const subject = 'Check this out!';  
    const body = `Here is something interesting: ${content}`;  
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}
module.exports ={msg, copy, share }