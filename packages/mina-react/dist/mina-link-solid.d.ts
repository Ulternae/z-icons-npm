import React from 'react';

export interface MinaLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLinkSolid(props: MinaLinkSolidProps): React.ReactElement;
export default MinaLinkSolid;
