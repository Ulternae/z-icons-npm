import React from 'react';

export interface CoreEyeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEyeRegularDuo: React.FC<CoreEyeRegularDuoProps>;
export default CoreEyeRegularDuo;
