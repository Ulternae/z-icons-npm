import React from 'react';

export interface LanBorderLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderLeftSolid(props: LanBorderLeftSolidProps): React.ReactElement;
export default LanBorderLeftSolid;
