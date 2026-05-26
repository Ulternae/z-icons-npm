import React from 'react';

export interface LanCircleUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUpLeft: React.FC<LanCircleUpLeftProps>;
export default LanCircleUpLeft;
