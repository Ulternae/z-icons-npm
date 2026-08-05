import React from 'react';

export interface LanGrid3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid3Thin(props: LanGrid3ThinProps): React.ReactElement;
export default LanGrid3Thin;
