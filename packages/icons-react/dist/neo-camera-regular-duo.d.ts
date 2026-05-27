import React from 'react';

export interface NeoCameraRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCameraRegularDuo: React.FC<NeoCameraRegularDuoProps>;
export default NeoCameraRegularDuo;
