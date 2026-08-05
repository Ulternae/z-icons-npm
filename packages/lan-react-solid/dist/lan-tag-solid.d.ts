import React from 'react';

export interface LanTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagSolid(props: LanTagSolidProps): React.ReactElement;
export default LanTagSolid;
