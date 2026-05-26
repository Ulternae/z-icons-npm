import React from 'react';

export interface LanAsteriskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAsterisk: React.FC<LanAsteriskProps>;
export default LanAsterisk;
