import React from 'react';

export interface LanCloudXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudXmarkThin(props: LanCloudXmarkThinProps): React.ReactElement;
export default LanCloudXmarkThin;
