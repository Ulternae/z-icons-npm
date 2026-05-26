import React from 'react';

export interface LanCircle8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle8Regular: React.FC<LanCircle8RegularProps>;
export default LanCircle8Regular;
