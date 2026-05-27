import React from 'react';

export interface NeoHeartRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeartRegularDuo: React.FC<NeoHeartRegularDuoProps>;
export default NeoHeartRegularDuo;
