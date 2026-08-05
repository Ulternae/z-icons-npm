import React from 'react';

export interface LanTarpDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpDropletSolid(props: LanTarpDropletSolidProps): React.ReactElement;
export default LanTarpDropletSolid;
