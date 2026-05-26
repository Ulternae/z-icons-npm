import React from 'react';

export interface LanHouseFloodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFlood: React.FC<LanHouseFloodProps>;
export default LanHouseFlood;
