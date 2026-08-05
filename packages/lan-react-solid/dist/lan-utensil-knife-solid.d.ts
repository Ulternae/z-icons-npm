import React from 'react';

export interface LanUtensilKnifeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtensilKnifeSolid(props: LanUtensilKnifeSolidProps): React.ReactElement;
export default LanUtensilKnifeSolid;
