import React from 'react';

export interface LanCloudMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMinusRegular(props: LanCloudMinusRegularProps): React.ReactElement;
export default LanCloudMinusRegular;
