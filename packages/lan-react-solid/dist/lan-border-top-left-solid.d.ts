import React from 'react';

export interface LanBorderTopLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopLeftSolid(props: LanBorderTopLeftSolidProps): React.ReactElement;
export default LanBorderTopLeftSolid;
