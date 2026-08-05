import React from 'react';

export interface LanCloudsMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsMoonThin(props: LanCloudsMoonThinProps): React.ReactElement;
export default LanCloudsMoonThin;
