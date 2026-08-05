import React from 'react';

export interface LanFootballHelmetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballHelmet(props: LanFootballHelmetProps): React.ReactElement;
export default LanFootballHelmet;
