import React from 'react';

export interface LanCheeseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseSolid(props: LanCheeseSolidProps): React.ReactElement;
export default LanCheeseSolid;
