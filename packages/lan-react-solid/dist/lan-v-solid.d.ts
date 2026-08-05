import React from 'react';

export interface LanVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVSolid(props: LanVSolidProps): React.ReactElement;
export default LanVSolid;
