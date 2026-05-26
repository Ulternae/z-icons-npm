import React from 'react';

export interface LanHouseFloodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFloodRegular: React.FC<LanHouseFloodRegularProps>;
export default LanHouseFloodRegular;
