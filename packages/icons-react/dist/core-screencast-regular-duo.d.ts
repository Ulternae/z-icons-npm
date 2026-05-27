import React from 'react';

export interface CoreScreencastRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreScreencastRegularDuo: React.FC<CoreScreencastRegularDuoProps>;
export default CoreScreencastRegularDuo;
