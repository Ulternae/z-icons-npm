import React from 'react';

export interface LanDragonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDragonSolid(props: LanDragonSolidProps): React.ReactElement;
export default LanDragonSolid;
