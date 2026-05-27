import React from 'react';

export interface CorePrintRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePrintRegularDuo: React.FC<CorePrintRegularDuoProps>;
export default CorePrintRegularDuo;
