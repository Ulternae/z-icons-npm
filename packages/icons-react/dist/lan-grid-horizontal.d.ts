import React from 'react';

export interface LanGridHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridHorizontal: React.FC<LanGridHorizontalProps>;
export default LanGridHorizontal;
