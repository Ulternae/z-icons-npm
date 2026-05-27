import React from 'react';

export interface NeoBoltRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoltRegularDuo: React.FC<NeoBoltRegularDuoProps>;
export default NeoBoltRegularDuo;
