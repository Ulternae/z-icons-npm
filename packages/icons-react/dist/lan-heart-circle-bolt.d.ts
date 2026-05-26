import React from 'react';

export interface LanHeartCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleBolt: React.FC<LanHeartCircleBoltProps>;
export default LanHeartCircleBolt;
