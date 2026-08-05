import React from 'react';

export interface LanStarExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarExclamation(props: LanStarExclamationProps): React.ReactElement;
export default LanStarExclamation;
