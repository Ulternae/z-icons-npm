import React from 'react';

export interface LanCloudHailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHail(props: LanCloudHailProps): React.ReactElement;
export default LanCloudHail;
