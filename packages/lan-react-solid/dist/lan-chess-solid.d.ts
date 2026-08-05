import React from 'react';

export interface LanChessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessSolid(props: LanChessSolidProps): React.ReactElement;
export default LanChessSolid;
