import React from 'react';

export interface LanHeadSideHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideHeartThin(props: LanHeadSideHeartThinProps): React.ReactElement;
export default LanHeadSideHeartThin;
