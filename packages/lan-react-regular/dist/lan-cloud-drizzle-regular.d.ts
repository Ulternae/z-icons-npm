import React from 'react';

export interface LanCloudDrizzleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudDrizzleRegular(props: LanCloudDrizzleRegularProps): React.ReactElement;
export default LanCloudDrizzleRegular;
