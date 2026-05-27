import React from 'react';

export interface NeoDropletRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDropletRegularDuo: React.FC<NeoDropletRegularDuoProps>;
export default NeoDropletRegularDuo;
