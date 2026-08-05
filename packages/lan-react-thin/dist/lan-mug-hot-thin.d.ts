import React from 'react';

export interface LanMugHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugHotThin(props: LanMugHotThinProps): React.ReactElement;
export default LanMugHotThin;
