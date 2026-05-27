import React from 'react';

export interface CoreMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMinusRegularDuo: React.FC<CoreMinusRegularDuoProps>;
export default CoreMinusRegularDuo;
