import React from 'react';

export interface LanRectangleProThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleProThin: React.FC<LanRectangleProThinProps>;
export default LanRectangleProThin;
