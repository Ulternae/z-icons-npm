import React from 'react';

export interface LanGrillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillThin(props: LanGrillThinProps): React.ReactElement;
export default LanGrillThin;
