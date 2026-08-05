import React from 'react';

export interface LanCircleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleExclamation(props: LanCircleExclamationProps): React.ReactElement;
export default LanCircleExclamation;
