import React from 'react';

export interface LanHeadSideBrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideBrainThin(props: LanHeadSideBrainThinProps): React.ReactElement;
export default LanHeadSideBrainThin;
