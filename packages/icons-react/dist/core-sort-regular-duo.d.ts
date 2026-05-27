import React from 'react';

export interface CoreSortRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSortRegularDuo: React.FC<CoreSortRegularDuoProps>;
export default CoreSortRegularDuo;
