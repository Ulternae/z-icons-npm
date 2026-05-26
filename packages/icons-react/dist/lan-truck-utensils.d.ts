import React from 'react';

export interface LanTruckUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckUtensils: React.FC<LanTruckUtensilsProps>;
export default LanTruckUtensils;
