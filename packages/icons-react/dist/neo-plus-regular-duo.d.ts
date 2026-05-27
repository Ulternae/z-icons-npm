import React from 'react';

export interface NeoPlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlusRegularDuo: React.FC<NeoPlusRegularDuoProps>;
export default NeoPlusRegularDuo;
