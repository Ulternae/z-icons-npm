import React from 'react';

export interface CoreTextRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTextRegularDuo: React.FC<CoreTextRegularDuoProps>;
export default CoreTextRegularDuo;
