import React from 'react';

export interface LanHurricaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHurricane: React.FC<LanHurricaneProps>;
export default LanHurricane;
