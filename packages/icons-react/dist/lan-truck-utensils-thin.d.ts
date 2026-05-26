import React from 'react';

export interface LanTruckUtensilsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckUtensilsThin: React.FC<LanTruckUtensilsThinProps>;
export default LanTruckUtensilsThin;
