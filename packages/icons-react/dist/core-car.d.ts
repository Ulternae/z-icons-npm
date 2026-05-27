import React from 'react';

export interface CoreCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCar: React.FC<CoreCarProps>;
export default CoreCar;
