import React from 'react';

export interface LanMoonCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonCloud(props: LanMoonCloudProps): React.ReactElement;
export default LanMoonCloud;
