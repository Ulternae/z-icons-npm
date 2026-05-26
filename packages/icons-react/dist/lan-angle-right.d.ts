import React from 'react';

export interface LanAngleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleRight: React.FC<LanAngleRightProps>;
export default LanAngleRight;
