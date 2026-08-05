import React from 'react';

export interface LanIciclesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIciclesSolid(props: LanIciclesSolidProps): React.ReactElement;
export default LanIciclesSolid;
