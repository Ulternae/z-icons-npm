import React from 'react';

export interface LanHandBackPointRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointRight: React.FC<LanHandBackPointRightProps>;
export default LanHandBackPointRight;
