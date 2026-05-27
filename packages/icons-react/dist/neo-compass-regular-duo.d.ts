import React from 'react';

export interface NeoCompassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompassRegularDuo: React.FC<NeoCompassRegularDuoProps>;
export default NeoCompassRegularDuo;
