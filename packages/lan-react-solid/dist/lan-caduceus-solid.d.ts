import React from 'react';

export interface LanCaduceusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaduceusSolid(props: LanCaduceusSolidProps): React.ReactElement;
export default LanCaduceusSolid;
