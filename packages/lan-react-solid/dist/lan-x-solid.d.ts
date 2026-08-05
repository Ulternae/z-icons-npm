import React from 'react';

export interface LanXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXSolid(props: LanXSolidProps): React.ReactElement;
export default LanXSolid;
