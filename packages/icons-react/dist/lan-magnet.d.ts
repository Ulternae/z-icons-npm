import React from 'react';

export interface LanMagnetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnet: React.FC<LanMagnetProps>;
export default LanMagnet;
