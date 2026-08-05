import React from 'react';

export interface MinaUnlinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUnlinkSolid(props: MinaUnlinkSolidProps): React.ReactElement;
export default MinaUnlinkSolid;
