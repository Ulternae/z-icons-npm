import React from 'react';

export interface LanFootballHelmetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballHelmetThin(props: LanFootballHelmetThinProps): React.ReactElement;
export default LanFootballHelmetThin;
