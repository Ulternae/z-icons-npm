import React from 'react';

export interface CoreLinkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLinkRegularDuo: React.FC<CoreLinkRegularDuoProps>;
export default CoreLinkRegularDuo;
