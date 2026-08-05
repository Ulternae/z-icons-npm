import React from 'react';

export interface NeoLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLinkSolid(props: NeoLinkSolidProps): React.ReactElement;
export default NeoLinkSolid;
