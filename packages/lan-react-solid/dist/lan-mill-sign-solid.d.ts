import React from 'react';

export interface LanMillSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMillSignSolid(props: LanMillSignSolidProps): React.ReactElement;
export default LanMillSignSolid;
