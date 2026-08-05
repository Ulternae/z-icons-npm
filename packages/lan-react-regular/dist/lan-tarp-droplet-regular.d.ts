import React from 'react';

export interface LanTarpDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpDropletRegular(props: LanTarpDropletRegularProps): React.ReactElement;
export default LanTarpDropletRegular;
