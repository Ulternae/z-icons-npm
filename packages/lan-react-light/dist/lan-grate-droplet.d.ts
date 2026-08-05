import React from 'react';

export interface LanGrateDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrateDroplet(props: LanGrateDropletProps): React.ReactElement;
export default LanGrateDroplet;
