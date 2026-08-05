import React from 'react';

export interface LanArrowsCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsCrossSolid(props: LanArrowsCrossSolidProps): React.ReactElement;
export default LanArrowsCrossSolid;
