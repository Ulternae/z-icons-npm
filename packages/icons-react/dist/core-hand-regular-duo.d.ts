import React from 'react';

export interface CoreHandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHandRegularDuo: React.FC<CoreHandRegularDuoProps>;
export default CoreHandRegularDuo;
