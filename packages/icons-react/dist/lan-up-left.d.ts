import React from 'react';

export interface LanUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLeft: React.FC<LanUpLeftProps>;
export default LanUpLeft;
