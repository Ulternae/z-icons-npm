import React from 'react';

export interface LanCloudWordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudWordThin(props: LanCloudWordThinProps): React.ReactElement;
export default LanCloudWordThin;
