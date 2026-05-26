import React from 'react';

export interface LanBracketsCurlyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsCurly: React.FC<LanBracketsCurlyProps>;
export default LanBracketsCurly;
