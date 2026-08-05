import React from 'react';

export interface LanBrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainThin(props: LanBrainThinProps): React.ReactElement;
export default LanBrainThin;
