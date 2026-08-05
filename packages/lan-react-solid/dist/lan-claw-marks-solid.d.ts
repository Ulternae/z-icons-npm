import React from 'react';

export interface LanClawMarksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClawMarksSolid(props: LanClawMarksSolidProps): React.ReactElement;
export default LanClawMarksSolid;
