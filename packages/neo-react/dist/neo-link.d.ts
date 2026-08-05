import React from 'react';

export interface NeoLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLink(props: NeoLinkProps): React.ReactElement;
export default NeoLink;
