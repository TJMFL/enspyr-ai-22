import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { Card } from '@/components/ui/card';

interface CodePreviewProps {
  code: string;
  language: string;
}

export default function CodePreview({ code, language }: CodePreviewProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <Card className="bg-zinc-900 p-4 overflow-x-auto">
      <pre className="!bg-transparent !p-0">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Card>
  );
}
