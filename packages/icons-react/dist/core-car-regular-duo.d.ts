import React from 'react';

export interface CoreCarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCarRegularDuo: React.FC<CoreCarRegularDuoProps>;
export default CoreCarRegularDuo;
