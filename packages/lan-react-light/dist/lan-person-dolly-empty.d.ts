import React from 'react';

export interface LanPersonDollyEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDollyEmpty(props: LanPersonDollyEmptyProps): React.ReactElement;
export default LanPersonDollyEmpty;
