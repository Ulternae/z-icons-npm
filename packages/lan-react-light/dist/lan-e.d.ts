import React from 'react';

export interface LanEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanE(props: LanEProps): React.ReactElement;
export default LanE;
