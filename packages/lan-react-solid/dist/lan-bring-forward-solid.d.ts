import React from 'react';

export interface LanBringForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringForwardSolid(props: LanBringForwardSolidProps): React.ReactElement;
export default LanBringForwardSolid;
