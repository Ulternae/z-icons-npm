import React from 'react';

export interface LanFillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillSolid(props: LanFillSolidProps): React.ReactElement;
export default LanFillSolid;
