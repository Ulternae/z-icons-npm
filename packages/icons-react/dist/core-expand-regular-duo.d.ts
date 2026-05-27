import React from 'react';

export interface CoreExpandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreExpandRegularDuo: React.FC<CoreExpandRegularDuoProps>;
export default CoreExpandRegularDuo;
