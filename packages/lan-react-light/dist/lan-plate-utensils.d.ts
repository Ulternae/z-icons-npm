import React from 'react';

export interface LanPlateUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateUtensils(props: LanPlateUtensilsProps): React.ReactElement;
export default LanPlateUtensils;
