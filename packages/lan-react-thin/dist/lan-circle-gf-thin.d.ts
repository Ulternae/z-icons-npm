import React from 'react';

export interface LanCircleGfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGfThin(props: LanCircleGfThinProps): React.ReactElement;
export default LanCircleGfThin;
