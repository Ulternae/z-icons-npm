import React from 'react';

export interface CoreLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLink(props: CoreLinkProps): React.ReactElement;
export default CoreLink;
