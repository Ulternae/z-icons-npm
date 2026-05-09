import React from 'react';

export interface MinaLinkTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLinkTwoSolid: React.FC<MinaLinkTwoSolidProps>;
export default MinaLinkTwoSolid;
