import React from 'react';

export interface NeoFishRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFishRegularDuo: React.FC<NeoFishRegularDuoProps>;
export default NeoFishRegularDuo;
