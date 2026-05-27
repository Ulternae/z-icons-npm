import React from 'react';

export interface CoreHeartRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeartRegularDuo: React.FC<CoreHeartRegularDuoProps>;
export default CoreHeartRegularDuo;
