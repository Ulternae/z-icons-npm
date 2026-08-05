import React from 'react';

export interface LanImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesSolid(props: LanImagesSolidProps): React.ReactElement;
export default LanImagesSolid;
