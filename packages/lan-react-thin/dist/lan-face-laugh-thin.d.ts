import React from 'react';

export interface LanFaceLaughThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughThin(props: LanFaceLaughThinProps): React.ReactElement;
export default LanFaceLaughThin;
