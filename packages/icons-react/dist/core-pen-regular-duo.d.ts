import React from 'react';

export interface CorePenRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenRegularDuo: React.FC<CorePenRegularDuoProps>;
export default CorePenRegularDuo;
