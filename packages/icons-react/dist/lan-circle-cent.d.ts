import React from 'react';

export interface LanCircleCentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCent: React.FC<LanCircleCentProps>;
export default LanCircleCent;
