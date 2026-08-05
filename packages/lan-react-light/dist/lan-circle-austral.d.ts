import React from 'react';

export interface LanCircleAustralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAustral(props: LanCircleAustralProps): React.ReactElement;
export default LanCircleAustral;
