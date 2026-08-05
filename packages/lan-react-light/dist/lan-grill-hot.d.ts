import React from 'react';

export interface LanGrillHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillHot(props: LanGrillHotProps): React.ReactElement;
export default LanGrillHot;
