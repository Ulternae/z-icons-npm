import React from 'react';

export interface MinaDropletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDropletsSolid(props: MinaDropletsSolidProps): React.ReactElement;
export default MinaDropletsSolid;
