import React from 'react';

export interface LanCircleZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleZThin(props: LanCircleZThinProps): React.ReactElement;
export default LanCircleZThin;
