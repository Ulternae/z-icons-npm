import React from 'react';

export interface LanKaabaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKaaba: React.FC<LanKaabaProps>;
export default LanKaaba;
