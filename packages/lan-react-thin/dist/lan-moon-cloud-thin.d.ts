import React from 'react';

export interface LanMoonCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonCloudThin(props: LanMoonCloudThinProps): React.ReactElement;
export default LanMoonCloudThin;
