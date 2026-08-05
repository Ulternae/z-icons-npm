import React from 'react';

export interface LanTarpDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpDroplet(props: LanTarpDropletProps): React.ReactElement;
export default LanTarpDroplet;
