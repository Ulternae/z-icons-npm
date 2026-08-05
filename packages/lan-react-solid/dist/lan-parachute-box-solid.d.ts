import React from 'react';

export interface LanParachuteBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParachuteBoxSolid(props: LanParachuteBoxSolidProps): React.ReactElement;
export default LanParachuteBoxSolid;
