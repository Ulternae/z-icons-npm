import React from 'react';

export interface CoreCrownRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCrownRegularDuo: React.FC<CoreCrownRegularDuoProps>;
export default CoreCrownRegularDuo;
