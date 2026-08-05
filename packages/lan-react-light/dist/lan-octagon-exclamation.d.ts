import React from 'react';

export interface LanOctagonExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonExclamation(props: LanOctagonExclamationProps): React.ReactElement;
export default LanOctagonExclamation;
