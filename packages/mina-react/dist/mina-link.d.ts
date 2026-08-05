import React from 'react';

export interface MinaLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLink(props: MinaLinkProps): React.ReactElement;
export default MinaLink;
