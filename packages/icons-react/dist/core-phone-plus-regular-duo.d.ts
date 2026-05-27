import React from 'react';

export interface CorePhonePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhonePlusRegularDuo: React.FC<CorePhonePlusRegularDuoProps>;
export default CorePhonePlusRegularDuo;
