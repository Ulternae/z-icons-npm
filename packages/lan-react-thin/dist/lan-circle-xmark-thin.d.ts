import React from 'react';

export interface LanCircleXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXmarkThin(props: LanCircleXmarkThinProps): React.ReactElement;
export default LanCircleXmarkThin;
