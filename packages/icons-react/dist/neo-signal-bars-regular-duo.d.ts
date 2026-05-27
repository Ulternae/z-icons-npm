import React from 'react';

export interface NeoSignalBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsRegularDuo: React.FC<NeoSignalBarsRegularDuoProps>;
export default NeoSignalBarsRegularDuo;
