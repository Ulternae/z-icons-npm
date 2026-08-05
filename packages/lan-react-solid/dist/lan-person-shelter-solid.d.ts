import React from 'react';

export interface LanPersonShelterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonShelterSolid(props: LanPersonShelterSolidProps): React.ReactElement;
export default LanPersonShelterSolid;
