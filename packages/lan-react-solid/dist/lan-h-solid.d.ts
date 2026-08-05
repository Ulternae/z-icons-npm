import React from 'react';

export interface LanHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHSolid(props: LanHSolidProps): React.ReactElement;
export default LanHSolid;
