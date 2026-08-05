import React from 'react';

export interface LanPersonShelterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonShelterThin(props: LanPersonShelterThinProps): React.ReactElement;
export default LanPersonShelterThin;
