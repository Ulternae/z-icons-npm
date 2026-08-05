import React from 'react';

export interface LanBorderInnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderInnerSolid(props: LanBorderInnerSolidProps): React.ReactElement;
export default LanBorderInnerSolid;
