import React from 'react';

export interface LanGalaxyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalaxyThin(props: LanGalaxyThinProps): React.ReactElement;
export default LanGalaxyThin;
