import React from 'react';

export interface LanMoonCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonCloudRegular(props: LanMoonCloudRegularProps): React.ReactElement;
export default LanMoonCloudRegular;
