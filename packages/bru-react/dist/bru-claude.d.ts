import React from 'react';

export interface BruClaudeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruClaude(props: BruClaudeProps): React.ReactElement;
export default BruClaude;
