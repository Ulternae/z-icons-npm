import React from 'react';

export interface LanXRayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXRayRegular(props: LanXRayRegularProps): React.ReactElement;
export default LanXRayRegular;
