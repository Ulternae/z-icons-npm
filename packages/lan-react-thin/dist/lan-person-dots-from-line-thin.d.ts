import React from 'react';

export interface LanPersonDotsFromLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDotsFromLineThin(props: LanPersonDotsFromLineThinProps): React.ReactElement;
export default LanPersonDotsFromLineThin;
