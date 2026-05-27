import React from 'react';

export interface CoreServerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreServerRegularDuo: React.FC<CoreServerRegularDuoProps>;
export default CoreServerRegularDuo;
