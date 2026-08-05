import React from 'react';

export interface LanShareAllSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAllSolid(props: LanShareAllSolidProps): React.ReactElement;
export default LanShareAllSolid;
