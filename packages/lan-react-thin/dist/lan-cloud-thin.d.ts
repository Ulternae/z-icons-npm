import React from 'react';

export interface LanCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudThin(props: LanCloudThinProps): React.ReactElement;
export default LanCloudThin;
