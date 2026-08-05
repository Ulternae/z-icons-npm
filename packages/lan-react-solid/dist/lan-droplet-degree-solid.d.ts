import React from 'react';

export interface LanDropletDegreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletDegreeSolid(props: LanDropletDegreeSolidProps): React.ReactElement;
export default LanDropletDegreeSolid;
