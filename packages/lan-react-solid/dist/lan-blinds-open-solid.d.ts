import React from 'react';

export interface LanBlindsOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsOpenSolid(props: LanBlindsOpenSolidProps): React.ReactElement;
export default LanBlindsOpenSolid;
