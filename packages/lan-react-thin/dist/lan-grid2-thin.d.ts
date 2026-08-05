import React from 'react';

export interface LanGrid2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2Thin(props: LanGrid2ThinProps): React.ReactElement;
export default LanGrid2Thin;
