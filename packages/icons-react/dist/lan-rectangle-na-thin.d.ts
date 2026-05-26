import React from 'react';

export interface LanRectangleNAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNAThin: React.FC<LanRectangleNAThinProps>;
export default LanRectangleNAThin;
