import React from 'react';

export interface NeoBugRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBugRegularDuo: React.FC<NeoBugRegularDuoProps>;
export default NeoBugRegularDuo;
