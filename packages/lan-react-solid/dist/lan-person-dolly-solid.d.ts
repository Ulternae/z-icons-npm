import React from 'react';

export interface LanPersonDollySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDollySolid(props: LanPersonDollySolidProps): React.ReactElement;
export default LanPersonDollySolid;
