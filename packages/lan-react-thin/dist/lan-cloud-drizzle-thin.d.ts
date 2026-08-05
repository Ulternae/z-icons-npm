import React from 'react';

export interface LanCloudDrizzleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudDrizzleThin(props: LanCloudDrizzleThinProps): React.ReactElement;
export default LanCloudDrizzleThin;
