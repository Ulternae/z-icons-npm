import React from 'react';

export interface LanBathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBathSolid(props: LanBathSolidProps): React.ReactElement;
export default LanBathSolid;
