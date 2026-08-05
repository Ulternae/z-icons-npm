import React from 'react';

export interface LanDialMinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMinSolid(props: LanDialMinSolidProps): React.ReactElement;
export default LanDialMinSolid;
