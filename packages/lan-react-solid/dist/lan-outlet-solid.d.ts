import React from 'react';

export interface LanOutletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOutletSolid(props: LanOutletSolidProps): React.ReactElement;
export default LanOutletSolid;
