import React from 'react';

export interface CoreWaterRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWaterRegularDuo: React.FC<CoreWaterRegularDuoProps>;
export default CoreWaterRegularDuo;
