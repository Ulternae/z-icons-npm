import React from 'react';

export interface MinaSearchUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchUserSolid: React.FC<MinaSearchUserSolidProps>;
export default MinaSearchUserSolid;
