import React from 'react';

export interface LanDanishKroneSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDanishKroneSign: React.FC<LanDanishKroneSignProps>;
export default LanDanishKroneSign;
