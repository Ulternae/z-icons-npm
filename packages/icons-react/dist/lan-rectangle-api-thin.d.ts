import React from 'react';

export interface LanRectangleApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleApiThin: React.FC<LanRectangleApiThinProps>;
export default LanRectangleApiThin;
