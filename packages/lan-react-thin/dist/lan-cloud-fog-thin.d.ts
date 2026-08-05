import React from 'react';

export interface LanCloudFogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudFogThin(props: LanCloudFogThinProps): React.ReactElement;
export default LanCloudFogThin;
