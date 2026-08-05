import React from 'react';

export interface MinaExternalLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaExternalLinkSolid(props: MinaExternalLinkSolidProps): React.ReactElement;
export default MinaExternalLinkSolid;
