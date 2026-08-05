import React from 'react';

export interface LanEurozoneSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEurozoneSignSolid(props: LanEurozoneSignSolidProps): React.ReactElement;
export default LanEurozoneSignSolid;
