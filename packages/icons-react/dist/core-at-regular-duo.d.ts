import React from 'react';

export interface CoreAtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAtRegularDuo: React.FC<CoreAtRegularDuoProps>;
export default CoreAtRegularDuo;
