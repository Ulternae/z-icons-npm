import React from 'react';

export interface LanAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtSolid(props: LanAtSolidProps): React.ReactElement;
export default LanAtSolid;
