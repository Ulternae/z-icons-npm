import React from 'react';

export interface LanPersonDressSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressSimpleThin(props: LanPersonDressSimpleThinProps): React.ReactElement;
export default LanPersonDressSimpleThin;
