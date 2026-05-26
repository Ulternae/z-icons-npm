import React from 'react';

export interface LanAngleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleLeft: React.FC<LanAngleLeftProps>;
export default LanAngleLeft;
