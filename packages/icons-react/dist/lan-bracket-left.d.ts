import React from 'react';

export interface LanBracketLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketLeft: React.FC<LanBracketLeftProps>;
export default LanBracketLeft;
