import React from 'react';

export interface LanMugSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugSaucerSolid(props: LanMugSaucerSolidProps): React.ReactElement;
export default LanMugSaucerSolid;
