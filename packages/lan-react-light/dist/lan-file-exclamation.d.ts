import React from 'react';

export interface LanFileExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileExclamation(props: LanFileExclamationProps): React.ReactElement;
export default LanFileExclamation;
