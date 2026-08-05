import React from 'react';

export interface LanCircleEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleE(props: LanCircleEProps): React.ReactElement;
export default LanCircleE;
