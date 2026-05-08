import React from 'react';

export interface MinaLinkOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLinkOneSolid: React.FC<MinaLinkOneSolidProps>;
export default MinaLinkOneSolid;
