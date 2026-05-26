import React from 'react';

export interface LanHouseTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTreeThin: React.FC<LanHouseTreeThinProps>;
export default LanHouseTreeThin;
