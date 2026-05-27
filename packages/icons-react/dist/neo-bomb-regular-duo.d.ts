import React from 'react';

export interface NeoBombRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBombRegularDuo: React.FC<NeoBombRegularDuoProps>;
export default NeoBombRegularDuo;
