import React from 'react';

export interface NeoWrenchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWrenchRegularDuo: React.FC<NeoWrenchRegularDuoProps>;
export default NeoWrenchRegularDuo;
