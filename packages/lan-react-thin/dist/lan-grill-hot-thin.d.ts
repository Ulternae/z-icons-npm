import React from 'react';

export interface LanGrillHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillHotThin(props: LanGrillHotThinProps): React.ReactElement;
export default LanGrillHotThin;
