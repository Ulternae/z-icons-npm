import React from 'react';

export interface LanPersonShelterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonShelter(props: LanPersonShelterProps): React.ReactElement;
export default LanPersonShelter;
