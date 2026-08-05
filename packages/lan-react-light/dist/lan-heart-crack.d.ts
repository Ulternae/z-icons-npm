import React from 'react';

export interface LanHeartCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCrack(props: LanHeartCrackProps): React.ReactElement;
export default LanHeartCrack;
