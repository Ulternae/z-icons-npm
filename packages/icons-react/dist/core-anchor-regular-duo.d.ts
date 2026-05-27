import React from 'react';

export interface CoreAnchorRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAnchorRegularDuo: React.FC<CoreAnchorRegularDuoProps>;
export default CoreAnchorRegularDuo;
