import React from 'react';

export interface LanBellExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellExclamation(props: LanBellExclamationProps): React.ReactElement;
export default LanBellExclamation;
