import React from 'react';

export interface MinaExternalLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaExternalLink: React.FC<MinaExternalLinkProps>;
export default MinaExternalLink;
