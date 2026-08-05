import React from 'react';

export interface LanCircle5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle5Thin(props: LanCircle5ThinProps): React.ReactElement;
export default LanCircle5Thin;
