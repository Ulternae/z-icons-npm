import React from 'react';

export interface NeoFaceMehRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceMehRegularDuo: React.FC<NeoFaceMehRegularDuoProps>;
export default NeoFaceMehRegularDuo;
