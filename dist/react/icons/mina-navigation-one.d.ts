import React from 'react';

export interface MinaNavigationOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNavigationOne: React.FC<MinaNavigationOneProps>;
export default MinaNavigationOne;
