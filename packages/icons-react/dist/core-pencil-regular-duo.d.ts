import React from 'react';

export interface CorePencilRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePencilRegularDuo: React.FC<CorePencilRegularDuoProps>;
export default CorePencilRegularDuo;
