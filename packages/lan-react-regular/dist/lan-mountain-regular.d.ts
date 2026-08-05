import React from 'react';

export interface LanMountainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainRegular(props: LanMountainRegularProps): React.ReactElement;
export default LanMountainRegular;
