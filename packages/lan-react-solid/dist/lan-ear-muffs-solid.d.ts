import React from 'react';

export interface LanEarMuffsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarMuffsSolid(props: LanEarMuffsSolidProps): React.ReactElement;
export default LanEarMuffsSolid;
