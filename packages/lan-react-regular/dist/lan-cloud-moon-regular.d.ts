import React from 'react';

export interface LanCloudMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoonRegular(props: LanCloudMoonRegularProps): React.ReactElement;
export default LanCloudMoonRegular;
