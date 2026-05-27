import React from 'react';

export interface CoreFilterRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilterRegularDuo: React.FC<CoreFilterRegularDuoProps>;
export default CoreFilterRegularDuo;
