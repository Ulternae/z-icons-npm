import React from 'react';

export interface CoreLightbulbRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLightbulbRegularDuo: React.FC<CoreLightbulbRegularDuoProps>;
export default CoreLightbulbRegularDuo;
