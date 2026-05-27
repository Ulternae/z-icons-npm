import React from 'react';

export interface NeoForwardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoForwardRegularDuo: React.FC<NeoForwardRegularDuoProps>;
export default NeoForwardRegularDuo;
