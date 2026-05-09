import React from 'react';

export interface MinaAmbulanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmbulance: React.FC<MinaAmbulanceProps>;
export default MinaAmbulance;
