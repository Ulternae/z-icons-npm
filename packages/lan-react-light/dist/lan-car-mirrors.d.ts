import React from 'react';

export interface LanCarMirrorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarMirrors(props: LanCarMirrorsProps): React.ReactElement;
export default LanCarMirrors;
