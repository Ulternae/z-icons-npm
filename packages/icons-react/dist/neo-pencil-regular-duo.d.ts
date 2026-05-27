import React from 'react';

export interface NeoPencilRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPencilRegularDuo: React.FC<NeoPencilRegularDuoProps>;
export default NeoPencilRegularDuo;
