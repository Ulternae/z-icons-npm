import React from 'react';

export interface CoreFlagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlagRegularDuo: React.FC<CoreFlagRegularDuoProps>;
export default CoreFlagRegularDuo;
