import React from 'react';

export interface NeoDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDropletSolid(props: NeoDropletSolidProps): React.ReactElement;
export default NeoDropletSolid;
