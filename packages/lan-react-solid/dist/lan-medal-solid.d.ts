import React from 'react';

export interface LanMedalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMedalSolid(props: LanMedalSolidProps): React.ReactElement;
export default LanMedalSolid;
