import React from 'react';

export interface LanRectangleIrcThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleIrcThin: React.FC<LanRectangleIrcThinProps>;
export default LanRectangleIrcThin;
