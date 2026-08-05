import React from 'react';

export interface LanCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompactDiscSolid(props: LanCompactDiscSolidProps): React.ReactElement;
export default LanCompactDiscSolid;
