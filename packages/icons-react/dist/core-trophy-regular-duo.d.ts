import React from 'react';

export interface CoreTrophyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrophyRegularDuo: React.FC<CoreTrophyRegularDuoProps>;
export default CoreTrophyRegularDuo;
