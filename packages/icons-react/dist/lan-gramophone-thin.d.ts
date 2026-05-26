import React from 'react';

export interface LanGramophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGramophoneThin: React.FC<LanGramophoneThinProps>;
export default LanGramophoneThin;
