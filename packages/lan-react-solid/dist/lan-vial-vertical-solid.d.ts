import React from 'react';

export interface LanVialVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVerticalSolid(props: LanVialVerticalSolidProps): React.ReactElement;
export default LanVialVerticalSolid;
