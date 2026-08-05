import React from 'react';

export interface LanFileVectorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVectorThin(props: LanFileVectorThinProps): React.ReactElement;
export default LanFileVectorThin;
