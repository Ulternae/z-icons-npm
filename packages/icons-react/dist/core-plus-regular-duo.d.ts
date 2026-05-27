import React from 'react';

export interface CorePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlusRegularDuo: React.FC<CorePlusRegularDuoProps>;
export default CorePlusRegularDuo;
