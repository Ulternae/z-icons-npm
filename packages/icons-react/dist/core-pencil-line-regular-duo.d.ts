import React from 'react';

export interface CorePencilLineRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePencilLineRegularDuo: React.FC<CorePencilLineRegularDuoProps>;
export default CorePencilLineRegularDuo;
