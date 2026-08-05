import React from 'react';

export interface LanCloudMeatballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMeatballThin(props: LanCloudMeatballThinProps): React.ReactElement;
export default LanCloudMeatballThin;
