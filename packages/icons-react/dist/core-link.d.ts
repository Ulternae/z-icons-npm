import React from 'react';

export interface CoreLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLink: React.FC<CoreLinkProps>;
export default CoreLink;
