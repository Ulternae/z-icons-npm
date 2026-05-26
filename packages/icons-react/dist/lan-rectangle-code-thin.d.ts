import React from 'react';

export interface LanRectangleCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleCodeThin: React.FC<LanRectangleCodeThinProps>;
export default LanRectangleCodeThin;
