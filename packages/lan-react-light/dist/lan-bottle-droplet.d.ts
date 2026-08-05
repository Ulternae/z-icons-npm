import React from 'react';

export interface LanBottleDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleDroplet(props: LanBottleDropletProps): React.ReactElement;
export default LanBottleDroplet;
