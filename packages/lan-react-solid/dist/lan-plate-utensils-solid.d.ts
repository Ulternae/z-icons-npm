import React from 'react';

export interface LanPlateUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateUtensilsSolid(props: LanPlateUtensilsSolidProps): React.ReactElement;
export default LanPlateUtensilsSolid;
