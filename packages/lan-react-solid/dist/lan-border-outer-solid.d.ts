import React from 'react';

export interface LanBorderOuterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderOuterSolid(props: LanBorderOuterSolidProps): React.ReactElement;
export default LanBorderOuterSolid;
