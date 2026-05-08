import React from 'react';

export interface MinaNavigationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNavigation: React.FC<MinaNavigationProps>;
export default MinaNavigation;
