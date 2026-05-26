import React from 'react';

export interface LanRectangleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleMinusThin: React.FC<LanRectangleMinusThinProps>;
export default LanRectangleMinusThin;
