import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IssueContent } from './styles';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface PostBodyProps {
  body: string;
}

export function PostBody({ body }: PostBodyProps) {
  return (
    <IssueContent>
      
      <Markdown
        className="line-break"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        children={body}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code
                className={className}
                style={{
                  display: 'block',
                  padding: '0.5em',
                  borderRadius: '4px',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      />
    </IssueContent>
  );
}
