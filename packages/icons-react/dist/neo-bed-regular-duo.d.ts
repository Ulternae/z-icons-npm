import React from 'react';

export interface NeoBedRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBedRegularDuo: React.FC<NeoBedRegularDuoProps>;
export default NeoBedRegularDuo;
