import React from 'react';

export interface CoreGrid2RegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGrid2RegularDuo: React.FC<CoreGrid2RegularDuoProps>;
export default CoreGrid2RegularDuo;
