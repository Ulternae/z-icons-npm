import React from 'react';

export interface LanSimCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSimCardSolid(props: LanSimCardSolidProps): React.ReactElement;
export default LanSimCardSolid;
