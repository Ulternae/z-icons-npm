import React from 'react';

export interface NeoLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLink: React.FC<NeoLinkProps>;
export default NeoLink;
