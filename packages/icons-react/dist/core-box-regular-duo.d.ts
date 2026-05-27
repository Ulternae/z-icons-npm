import React from 'react';

export interface CoreBoxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoxRegularDuo: React.FC<CoreBoxRegularDuoProps>;
export default CoreBoxRegularDuo;
