import React from 'react';

export interface LanShortsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShortsRegular(props: LanShortsRegularProps): React.ReactElement;
export default LanShortsRegular;
