import React from 'react';

export interface CoreTvRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTvRegularDuo: React.FC<CoreTvRegularDuoProps>;
export default CoreTvRegularDuo;
