import React from 'react';

export interface LanExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExclamation(props: LanExclamationProps): React.ReactElement;
export default LanExclamation;
