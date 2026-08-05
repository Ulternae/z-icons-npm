import React from 'react';

export interface LanDialLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialLowSolid(props: LanDialLowSolidProps): React.ReactElement;
export default LanDialLowSolid;
