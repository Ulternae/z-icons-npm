import React from 'react';

export interface NeoAngleUpRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleUpRegularDuo: React.FC<NeoAngleUpRegularDuoProps>;
export default NeoAngleUpRegularDuo;
