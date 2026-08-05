import React from 'react';

export interface LanBorderRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderRightSolid(props: LanBorderRightSolidProps): React.ReactElement;
export default LanBorderRightSolid;
