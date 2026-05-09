import React from 'react';

export interface MinaLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLink: React.FC<MinaLinkProps>;
export default MinaLink;
