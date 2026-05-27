import React from 'react';

export interface CoreFeatherRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFeatherRegularDuo: React.FC<CoreFeatherRegularDuoProps>;
export default CoreFeatherRegularDuo;
