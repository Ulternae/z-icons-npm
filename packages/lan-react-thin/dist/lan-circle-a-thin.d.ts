import React from 'react';

export interface LanCircleAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAThin(props: LanCircleAThinProps): React.ReactElement;
export default LanCircleAThin;
