import React from 'react';

export interface LanCloudHailMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudHailMixed(props: LanCloudHailMixedProps): React.ReactElement;
export default LanCloudHailMixed;
