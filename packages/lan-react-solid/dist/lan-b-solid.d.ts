import React from 'react';

export interface LanBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBSolid(props: LanBSolidProps): React.ReactElement;
export default LanBSolid;
