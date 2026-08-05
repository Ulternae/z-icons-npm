import React from 'react';

export interface LanCircle8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle8Thin(props: LanCircle8ThinProps): React.ReactElement;
export default LanCircle8Thin;
