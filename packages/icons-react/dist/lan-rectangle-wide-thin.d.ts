import React from 'react';

export interface LanRectangleWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleWideThin: React.FC<LanRectangleWideThinProps>;
export default LanRectangleWideThin;
