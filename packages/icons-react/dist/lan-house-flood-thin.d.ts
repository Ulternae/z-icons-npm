import React from 'react';

export interface LanHouseFloodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFloodThin: React.FC<LanHouseFloodThinProps>;
export default LanHouseFloodThin;
