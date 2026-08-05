import React from 'react';

export interface LanCornerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornerSolid(props: LanCornerSolidProps): React.ReactElement;
export default LanCornerSolid;
