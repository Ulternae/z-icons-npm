import React from 'react';

export interface LanCloudMeatballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMeatballRegular(props: LanCloudMeatballRegularProps): React.ReactElement;
export default LanCloudMeatballRegular;
