import React from 'react';

export interface NeoStopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStopRegularDuo: React.FC<NeoStopRegularDuoProps>;
export default NeoStopRegularDuo;
