import React from 'react';

export interface LanFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireSolid(props: LanFireSolidProps): React.ReactElement;
export default LanFireSolid;
