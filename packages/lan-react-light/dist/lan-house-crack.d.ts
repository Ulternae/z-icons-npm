import React from 'react';

export interface LanHouseCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCrack(props: LanHouseCrackProps): React.ReactElement;
export default LanHouseCrack;
