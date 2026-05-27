import React from 'react';

export interface CoreDropletRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDropletRegularDuo: React.FC<CoreDropletRegularDuoProps>;
export default CoreDropletRegularDuo;
