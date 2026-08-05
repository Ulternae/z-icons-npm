import React from 'react';

export interface LanBoreHoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoreHole(props: LanBoreHoleProps): React.ReactElement;
export default LanBoreHole;
