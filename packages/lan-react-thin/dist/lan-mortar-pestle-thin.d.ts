import React from 'react';

export interface LanMortarPestleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarPestleThin(props: LanMortarPestleThinProps): React.ReactElement;
export default LanMortarPestleThin;
