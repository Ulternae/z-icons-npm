import React from 'react';

export interface NeoPawRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPawRegularDuo: React.FC<NeoPawRegularDuoProps>;
export default NeoPawRegularDuo;
