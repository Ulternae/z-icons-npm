import React from 'react';

export interface LanHomeLgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeLgSolid(props: LanHomeLgSolidProps): React.ReactElement;
export default LanHomeLgSolid;
