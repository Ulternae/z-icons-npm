import React from 'react';

export interface LanHeartPulseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartPulseSolid(props: LanHeartPulseSolidProps): React.ReactElement;
export default LanHeartPulseSolid;
