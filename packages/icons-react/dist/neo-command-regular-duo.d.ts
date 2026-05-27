import React from 'react';

export interface NeoCommandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommandRegularDuo: React.FC<NeoCommandRegularDuoProps>;
export default NeoCommandRegularDuo;
