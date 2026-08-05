import React from 'react';

export interface LanKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKSolid(props: LanKSolidProps): React.ReactElement;
export default LanKSolid;
