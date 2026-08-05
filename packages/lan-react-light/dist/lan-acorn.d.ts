import React from 'react';

export interface LanAcornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAcorn(props: LanAcornProps): React.ReactElement;
export default LanAcorn;
