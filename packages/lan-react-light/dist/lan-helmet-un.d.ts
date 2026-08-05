import React from 'react';

export interface LanHelmetUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetUn(props: LanHelmetUnProps): React.ReactElement;
export default LanHelmetUn;
