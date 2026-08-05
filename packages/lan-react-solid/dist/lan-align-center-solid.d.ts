import React from 'react';

export interface LanAlignCenterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignCenterSolid(props: LanAlignCenterSolidProps): React.ReactElement;
export default LanAlignCenterSolid;
