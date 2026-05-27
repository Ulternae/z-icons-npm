import React from 'react';

export interface CoreRadioRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRadioRegularDuo: React.FC<CoreRadioRegularDuoProps>;
export default CoreRadioRegularDuo;
