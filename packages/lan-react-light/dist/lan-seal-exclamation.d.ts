import React from 'react';

export interface LanSealExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealExclamation(props: LanSealExclamationProps): React.ReactElement;
export default LanSealExclamation;
