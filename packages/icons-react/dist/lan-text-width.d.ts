import React from 'react';

export interface LanTextWidthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextWidth: React.FC<LanTextWidthProps>;
export default LanTextWidth;
