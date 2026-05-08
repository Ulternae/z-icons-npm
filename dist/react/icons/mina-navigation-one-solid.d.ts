import React from 'react';

export interface MinaNavigationOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNavigationOneSolid: React.FC<MinaNavigationOneSolidProps>;
export default MinaNavigationOneSolid;
