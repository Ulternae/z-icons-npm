import React from 'react';

export interface LanRectangleNewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNewThin: React.FC<LanRectangleNewThinProps>;
export default LanRectangleNewThin;
