import React from 'react';

export interface LanMicrowaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrowaveSolid(props: LanMicrowaveSolidProps): React.ReactElement;
export default LanMicrowaveSolid;
