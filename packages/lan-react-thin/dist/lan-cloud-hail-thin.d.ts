import React from 'react';

export interface LanCloudHailThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHailThin(props: LanCloudHailThinProps): React.ReactElement;
export default LanCloudHailThin;
