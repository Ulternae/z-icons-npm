import React from 'react';

export interface BruClaudeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruClaude: React.FC<BruClaudeProps>;
export default BruClaude;
