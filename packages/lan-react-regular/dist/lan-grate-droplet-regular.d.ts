import React from 'react';

export interface LanGrateDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateDropletRegular(props: LanGrateDropletRegularProps): React.ReactElement;
export default LanGrateDropletRegular;
