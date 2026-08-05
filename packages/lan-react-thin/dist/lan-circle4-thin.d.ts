import React from 'react';

export interface LanCircle4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle4Thin(props: LanCircle4ThinProps): React.ReactElement;
export default LanCircle4Thin;
