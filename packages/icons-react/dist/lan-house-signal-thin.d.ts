import React from 'react';

export interface LanHouseSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseSignalThin: React.FC<LanHouseSignalThinProps>;
export default LanHouseSignalThin;
