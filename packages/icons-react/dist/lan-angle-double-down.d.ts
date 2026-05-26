import React from 'react';

export interface LanAngleDoubleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDoubleDown: React.FC<LanAngleDoubleDownProps>;
export default LanAngleDoubleDown;
