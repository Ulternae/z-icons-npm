import React from 'react';

export interface MinaDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDropletSolid(props: MinaDropletSolidProps): React.ReactElement;
export default MinaDropletSolid;
