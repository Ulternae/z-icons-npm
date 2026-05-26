import React from 'react';

export interface LanAngle90RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngle90Regular: React.FC<LanAngle90RegularProps>;
export default LanAngle90Regular;
