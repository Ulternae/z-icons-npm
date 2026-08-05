import React from 'react';

export interface LanGridHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridHorizontalSolid(props: LanGridHorizontalSolidProps): React.ReactElement;
export default LanGridHorizontalSolid;
