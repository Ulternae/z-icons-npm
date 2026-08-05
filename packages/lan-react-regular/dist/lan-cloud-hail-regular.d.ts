import React from 'react';

export interface LanCloudHailRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHailRegular(props: LanCloudHailRegularProps): React.ReactElement;
export default LanCloudHailRegular;
