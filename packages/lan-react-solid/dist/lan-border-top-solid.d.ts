import React from 'react';

export interface LanBorderTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopSolid(props: LanBorderTopSolidProps): React.ReactElement;
export default LanBorderTopSolid;
