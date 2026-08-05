import React from 'react';

export interface LanCircleQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQThin(props: LanCircleQThinProps): React.ReactElement;
export default LanCircleQThin;
