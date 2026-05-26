import React from 'react';

export interface LanGramophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGramophoneSolid: React.FC<LanGramophoneSolidProps>;
export default LanGramophoneSolid;
