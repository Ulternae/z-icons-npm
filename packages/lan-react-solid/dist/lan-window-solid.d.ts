import React from 'react';

export interface LanWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowSolid(props: LanWindowSolidProps): React.ReactElement;
export default LanWindowSolid;
