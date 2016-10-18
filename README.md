<h1>Flashcards Readme</h1>

<h2>What is Flashcards</h2>

Flashcards is a free open-sourced spaced repetition flashcard learning software similar to SuperMemo. It implements an advanced adaptive scheduling algorithm based on modified Mnemosyne algorithm (Enhanced SuperMemo SM2 algorithm) to maximize the learning efficient.

Flashcards will help you learn various languages like English, German, Spanish, French, Italian, Esperanto.

<h2>Directory structure</h2>

app: The app source


.server.rb - server for imitation of receiving data


<h2>How to install</h2>
<h3>Download angular-flashcards</h3>
Clone the <a href ="https://github.com/dabonka/angular-flashcards/">angular-flashcards repository</a> located at GitHub by running the following command:

<pre>
<code>
git clone https://github.com/dabonka/angular-flashcards.git
</code>
</pre>
Change your current directory to angular-flashcards.
<pre>
<code>
cd angular-flashcards
</code>
</pre>
<h3>Install Node.js</h3>
You can download a Node.js installer for your operating system from <a href="https://nodejs.org/en/download/">href="https://nodejs.org/en/download/</a>.
Check the version of Node.js that you have installed by running the following command:
<pre>
<code>
node --version
</code>
</pre>
Once you have Node.js installed on your machine, you can download the tool dependencies by running:
<pre>
<code>
npm install
</code>
</pre>
<h3>Install sinatra gem</h3>
<pre>
<code>
gem install sinatra
gem install sinatra-cross_origin
</code>
</pre>

<h3>Running the Web Server</h3>
The angular-flashcards project is configured with a simple static web server for hosting the application during development. Start the web server by running:
<pre>
<code>
npm start
</code>
</pre>
<h3>Running the Web Server for simulation of data receiving</h3>
For simulation of data receiving just call:
<pre>
<code>
ruby server.rb
</code>
</pre>
