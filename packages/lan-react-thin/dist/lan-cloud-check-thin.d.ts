import React from 'react';

export interface LanCloudCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudCheckThin(props: LanCloudCheckThinProps): React.ReactElement;
export default LanCloudCheckThin;
