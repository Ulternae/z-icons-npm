import React from 'react';

export interface LanGrillHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillHotSolid(props: LanGrillHotSolidProps): React.ReactElement;
export default LanGrillHotSolid;
