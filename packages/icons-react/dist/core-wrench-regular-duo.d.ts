import React from 'react';

export interface CoreWrenchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWrenchRegularDuo: React.FC<CoreWrenchRegularDuoProps>;
export default CoreWrenchRegularDuo;
