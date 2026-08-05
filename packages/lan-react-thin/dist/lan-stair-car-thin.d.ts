import React from 'react';

export interface LanStairCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairCarThin(props: LanStairCarThinProps): React.ReactElement;
export default LanStairCarThin;
