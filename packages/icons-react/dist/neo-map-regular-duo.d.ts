import React from 'react';

export interface NeoMapRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMapRegularDuo: React.FC<NeoMapRegularDuoProps>;
export default NeoMapRegularDuo;
