import React from 'react';

export interface NeoCarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCarRegularDuo: React.FC<NeoCarRegularDuoProps>;
export default NeoCarRegularDuo;
