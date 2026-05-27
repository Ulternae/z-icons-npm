import React from 'react';

export interface CoreXmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreXmarkRegularDuo: React.FC<CoreXmarkRegularDuoProps>;
export default CoreXmarkRegularDuo;
