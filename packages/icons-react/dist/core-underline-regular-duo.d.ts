import React from 'react';

export interface CoreUnderlineRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUnderlineRegularDuo: React.FC<CoreUnderlineRegularDuoProps>;
export default CoreUnderlineRegularDuo;
