import React from 'react';

export interface MinaNavigationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNavigationSolid: React.FC<MinaNavigationSolidProps>;
export default MinaNavigationSolid;
