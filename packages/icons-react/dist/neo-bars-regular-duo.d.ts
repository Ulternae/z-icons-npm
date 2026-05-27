import React from 'react';

export interface NeoBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBarsRegularDuo: React.FC<NeoBarsRegularDuoProps>;
export default NeoBarsRegularDuo;
