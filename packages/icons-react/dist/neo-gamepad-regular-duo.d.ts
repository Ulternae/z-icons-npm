import React from 'react';

export interface NeoGamepadRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGamepadRegularDuo: React.FC<NeoGamepadRegularDuoProps>;
export default NeoGamepadRegularDuo;
