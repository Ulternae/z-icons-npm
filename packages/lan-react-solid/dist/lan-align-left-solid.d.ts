import React from 'react';

export interface LanAlignLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignLeftSolid(props: LanAlignLeftSolidProps): React.ReactElement;
export default LanAlignLeftSolid;
