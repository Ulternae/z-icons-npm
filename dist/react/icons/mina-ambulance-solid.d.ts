import React from 'react';

export interface MinaAmbulanceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmbulanceSolid: React.FC<MinaAmbulanceSolidProps>;
export default MinaAmbulanceSolid;
