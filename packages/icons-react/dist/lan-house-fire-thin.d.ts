import React from 'react';

export interface LanHouseFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFireThin: React.FC<LanHouseFireThinProps>;
export default LanHouseFireThin;
