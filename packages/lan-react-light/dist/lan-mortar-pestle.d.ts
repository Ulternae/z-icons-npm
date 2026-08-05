import React from 'react';

export interface LanMortarPestleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarPestle(props: LanMortarPestleProps): React.ReactElement;
export default LanMortarPestle;
