import React from 'react';

export interface LanSackXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackXmarkSolid(props: LanSackXmarkSolidProps): React.ReactElement;
export default LanSackXmarkSolid;
