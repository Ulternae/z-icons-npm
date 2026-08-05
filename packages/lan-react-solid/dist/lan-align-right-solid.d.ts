import React from 'react';

export interface LanAlignRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignRightSolid(props: LanAlignRightSolidProps): React.ReactElement;
export default LanAlignRightSolid;
