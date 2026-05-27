import React from 'react';

export interface CoreBookRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookRegularDuo: React.FC<CoreBookRegularDuoProps>;
export default CoreBookRegularDuo;
