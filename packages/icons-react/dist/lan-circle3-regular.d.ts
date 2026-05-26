import React from 'react';

export interface LanCircle3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle3Regular: React.FC<LanCircle3RegularProps>;
export default LanCircle3Regular;
