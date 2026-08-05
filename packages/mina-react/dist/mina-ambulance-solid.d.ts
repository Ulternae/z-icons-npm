import React from 'react';

export interface MinaAmbulanceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmbulanceSolid(props: MinaAmbulanceSolidProps): React.ReactElement;
export default MinaAmbulanceSolid;
