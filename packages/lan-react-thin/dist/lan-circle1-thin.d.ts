import React from 'react';

export interface LanCircle1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle1Thin(props: LanCircle1ThinProps): React.ReactElement;
export default LanCircle1Thin;
