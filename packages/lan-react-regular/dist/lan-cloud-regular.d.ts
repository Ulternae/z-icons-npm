import React from 'react';

export interface LanCloudRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudRegular(props: LanCloudRegularProps): React.ReactElement;
export default LanCloudRegular;
