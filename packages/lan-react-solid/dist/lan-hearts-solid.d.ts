import React from 'react';

export interface LanHeartsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartsSolid(props: LanHeartsSolidProps): React.ReactElement;
export default LanHeartsSolid;
