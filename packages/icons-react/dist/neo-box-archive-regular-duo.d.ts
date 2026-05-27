import React from 'react';

export interface NeoBoxArchiveRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoxArchiveRegularDuo: React.FC<NeoBoxArchiveRegularDuoProps>;
export default NeoBoxArchiveRegularDuo;
