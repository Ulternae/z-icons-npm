import React from 'react';

export interface LanGrateDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateDropletSolid(props: LanGrateDropletSolidProps): React.ReactElement;
export default LanGrateDropletSolid;
