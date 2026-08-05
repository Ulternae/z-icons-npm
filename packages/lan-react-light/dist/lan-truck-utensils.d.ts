import React from 'react';

export interface LanTruckUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckUtensils(props: LanTruckUtensilsProps): React.ReactElement;
export default LanTruckUtensils;
