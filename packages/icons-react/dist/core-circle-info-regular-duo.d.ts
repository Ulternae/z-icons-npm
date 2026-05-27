import React from 'react';

export interface CoreCircleInfoRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleInfoRegularDuo: React.FC<CoreCircleInfoRegularDuoProps>;
export default CoreCircleInfoRegularDuo;
