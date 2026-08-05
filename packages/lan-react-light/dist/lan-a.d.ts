import React from 'react';

export interface LanAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanA(props: LanAProps): React.ReactElement;
export default LanA;
