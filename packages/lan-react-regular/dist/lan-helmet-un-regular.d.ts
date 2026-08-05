import React from 'react';

export interface LanHelmetUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetUnRegular(props: LanHelmetUnRegularProps): React.ReactElement;
export default LanHelmetUnRegular;
