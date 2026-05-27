import React from 'react';

export interface CoreFileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileRegularDuo: React.FC<CoreFileRegularDuoProps>;
export default CoreFileRegularDuo;
