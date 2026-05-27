import React from 'react';

export interface NeoFaceGrinRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceGrinRegularDuo: React.FC<NeoFaceGrinRegularDuoProps>;
export default NeoFaceGrinRegularDuo;
