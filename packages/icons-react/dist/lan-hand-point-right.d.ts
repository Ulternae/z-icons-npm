import React from 'react';

export interface LanHandPointRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRight: React.FC<LanHandPointRightProps>;
export default LanHandPointRight;
