import React from 'react';

export interface LanHousePersonArriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHousePersonArriveThin: React.FC<LanHousePersonArriveThinProps>;
export default LanHousePersonArriveThin;
