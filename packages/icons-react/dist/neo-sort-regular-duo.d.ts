import React from 'react';

export interface NeoSortRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSortRegularDuo: React.FC<NeoSortRegularDuoProps>;
export default NeoSortRegularDuo;
