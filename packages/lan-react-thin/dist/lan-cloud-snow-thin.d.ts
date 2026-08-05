import React from 'react';

export interface LanCloudSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSnowThin(props: LanCloudSnowThinProps): React.ReactElement;
export default LanCloudSnowThin;
