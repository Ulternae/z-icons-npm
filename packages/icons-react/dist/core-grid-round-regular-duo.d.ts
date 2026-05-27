import React from 'react';

export interface CoreGridRoundRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGridRoundRegularDuo: React.FC<CoreGridRoundRegularDuoProps>;
export default CoreGridRoundRegularDuo;
