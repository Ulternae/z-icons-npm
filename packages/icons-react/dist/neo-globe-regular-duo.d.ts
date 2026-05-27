import React from 'react';

export interface NeoGlobeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGlobeRegularDuo: React.FC<NeoGlobeRegularDuoProps>;
export default NeoGlobeRegularDuo;
