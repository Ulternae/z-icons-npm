import React from 'react';

export interface CoreIdCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreIdCardRegularDuo: React.FC<CoreIdCardRegularDuoProps>;
export default CoreIdCardRegularDuo;
