import React from 'react';

export interface LanCloudBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBoltThin(props: LanCloudBoltThinProps): React.ReactElement;
export default LanCloudBoltThin;
