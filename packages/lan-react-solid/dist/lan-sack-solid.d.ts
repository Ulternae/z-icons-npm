import React from 'react';

export interface LanSackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackSolid(props: LanSackSolidProps): React.ReactElement;
export default LanSackSolid;
