import React from 'react';

export interface LanHeadSideMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMaskSolid(props: LanHeadSideMaskSolidProps): React.ReactElement;
export default LanHeadSideMaskSolid;
