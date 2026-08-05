import React from 'react';

export interface LanDiamondExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondExclamation(props: LanDiamondExclamationProps): React.ReactElement;
export default LanDiamondExclamation;
