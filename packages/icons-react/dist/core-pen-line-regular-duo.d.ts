import React from 'react';

export interface CorePenLineRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenLineRegularDuo: React.FC<CorePenLineRegularDuoProps>;
export default CorePenLineRegularDuo;
