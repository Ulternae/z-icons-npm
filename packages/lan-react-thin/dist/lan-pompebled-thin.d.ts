import React from 'react';

export interface LanPompebledThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPompebledThin(props: LanPompebledThinProps): React.ReactElement;
export default LanPompebledThin;
