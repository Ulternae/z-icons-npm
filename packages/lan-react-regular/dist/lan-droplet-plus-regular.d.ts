import React from 'react';

export interface LanDropletPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPlusRegular(props: LanDropletPlusRegularProps): React.ReactElement;
export default LanDropletPlusRegular;
