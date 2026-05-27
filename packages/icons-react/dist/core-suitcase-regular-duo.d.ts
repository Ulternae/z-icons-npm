import React from 'react';

export interface CoreSuitcaseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSuitcaseRegularDuo: React.FC<CoreSuitcaseRegularDuoProps>;
export default CoreSuitcaseRegularDuo;
