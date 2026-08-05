import React from 'react';

export interface LanHelmetUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetUnSolid(props: LanHelmetUnSolidProps): React.ReactElement;
export default LanHelmetUnSolid;
