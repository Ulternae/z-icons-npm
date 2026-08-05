import React from 'react';

export interface LanYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYSolid(props: LanYSolidProps): React.ReactElement;
export default LanYSolid;
