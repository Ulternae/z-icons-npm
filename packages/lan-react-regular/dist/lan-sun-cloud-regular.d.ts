import React from 'react';

export interface LanSunCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunCloudRegular(props: LanSunCloudRegularProps): React.ReactElement;
export default LanSunCloudRegular;
