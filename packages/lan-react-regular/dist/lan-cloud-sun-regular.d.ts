import React from 'react';

export interface LanCloudSunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunRegular(props: LanCloudSunRegularProps): React.ReactElement;
export default LanCloudSunRegular;
