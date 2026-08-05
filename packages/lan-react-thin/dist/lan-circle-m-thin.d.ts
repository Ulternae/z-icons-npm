import React from 'react';

export interface LanCircleMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMThin(props: LanCircleMThinProps): React.ReactElement;
export default LanCircleMThin;
