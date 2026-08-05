import React from 'react';

export interface LanCircle3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle3Thin(props: LanCircle3ThinProps): React.ReactElement;
export default LanCircle3Thin;
