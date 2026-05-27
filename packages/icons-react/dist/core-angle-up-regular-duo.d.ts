import React from 'react';

export interface CoreAngleUpRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleUpRegularDuo: React.FC<CoreAngleUpRegularDuoProps>;
export default CoreAngleUpRegularDuo;
