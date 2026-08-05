import React from 'react';

export interface LanTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeSolid(props: LanTreeSolidProps): React.ReactElement;
export default LanTreeSolid;
