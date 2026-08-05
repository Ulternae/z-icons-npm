import React from 'react';

export interface LanMarsStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeSolid(props: LanMarsStrokeSolidProps): React.ReactElement;
export default LanMarsStrokeSolid;
