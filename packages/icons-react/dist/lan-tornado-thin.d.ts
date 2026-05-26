import React from 'react';

export interface LanTornadoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTornadoThin: React.FC<LanTornadoThinProps>;
export default LanTornadoThin;
