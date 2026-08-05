import React from 'react';

export interface LanGrateDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateDropletThin(props: LanGrateDropletThinProps): React.ReactElement;
export default LanGrateDropletThin;
