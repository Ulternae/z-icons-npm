import React from 'react';

export interface NeoPrintRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPrintRegularDuo: React.FC<NeoPrintRegularDuoProps>;
export default NeoPrintRegularDuo;
