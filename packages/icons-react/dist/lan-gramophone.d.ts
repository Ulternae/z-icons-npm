import React from 'react';

export interface LanGramophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGramophone: React.FC<LanGramophoneProps>;
export default LanGramophone;
