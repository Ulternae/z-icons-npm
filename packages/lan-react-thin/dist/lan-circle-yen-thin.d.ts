import React from 'react';

export interface LanCircleYenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYenThin(props: LanCircleYenThinProps): React.ReactElement;
export default LanCircleYenThin;
