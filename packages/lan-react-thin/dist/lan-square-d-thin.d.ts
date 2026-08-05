import React from 'react';

export interface LanSquareDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDThin(props: LanSquareDThinProps): React.ReactElement;
export default LanSquareDThin;
