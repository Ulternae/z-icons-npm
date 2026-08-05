import React from 'react';

export interface LanHelmetUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetUnThin(props: LanHelmetUnThinProps): React.ReactElement;
export default LanHelmetUnThin;
