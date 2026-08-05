import React from 'react';

export interface LanFileOdfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileOdfSolid(props: LanFileOdfSolidProps): React.ReactElement;
export default LanFileOdfSolid;
