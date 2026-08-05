import React from 'react';

export interface LanCloudMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoonThin(props: LanCloudMoonThinProps): React.ReactElement;
export default LanCloudMoonThin;
