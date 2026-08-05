import React from 'react';

export interface LanFileTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTimesSolid(props: LanFileTimesSolidProps): React.ReactElement;
export default LanFileTimesSolid;
