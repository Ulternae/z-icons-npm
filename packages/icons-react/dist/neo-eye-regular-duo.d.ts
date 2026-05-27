import React from 'react';

export interface NeoEyeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEyeRegularDuo: React.FC<NeoEyeRegularDuoProps>;
export default NeoEyeRegularDuo;
