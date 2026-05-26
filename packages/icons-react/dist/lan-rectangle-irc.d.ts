import React from 'react';

export interface LanRectangleIrcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleIrc: React.FC<LanRectangleIrcProps>;
export default LanRectangleIrc;
