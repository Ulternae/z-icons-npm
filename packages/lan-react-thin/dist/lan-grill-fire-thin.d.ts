import React from 'react';

export interface LanGrillFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillFireThin(props: LanGrillFireThinProps): React.ReactElement;
export default LanGrillFireThin;
