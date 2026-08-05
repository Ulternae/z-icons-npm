import React from 'react';

export interface MinaLinkOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLinkOneSolid(props: MinaLinkOneSolidProps): React.ReactElement;
export default MinaLinkOneSolid;
