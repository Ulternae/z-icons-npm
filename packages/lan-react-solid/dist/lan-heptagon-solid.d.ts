import React from 'react';

export interface LanHeptagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeptagonSolid(props: LanHeptagonSolidProps): React.ReactElement;
export default LanHeptagonSolid;
