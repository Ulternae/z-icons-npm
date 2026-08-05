import React from 'react';

export interface LanDumbbellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumbbellSolid(props: LanDumbbellSolidProps): React.ReactElement;
export default LanDumbbellSolid;
