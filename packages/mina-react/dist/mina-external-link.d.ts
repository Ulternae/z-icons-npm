import React from 'react';

export interface MinaExternalLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaExternalLink(props: MinaExternalLinkProps): React.ReactElement;
export default MinaExternalLink;
