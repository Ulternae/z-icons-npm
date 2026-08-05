import React from 'react';

export interface LanScrollSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollSolid(props: LanScrollSolidProps): React.ReactElement;
export default LanScrollSolid;
