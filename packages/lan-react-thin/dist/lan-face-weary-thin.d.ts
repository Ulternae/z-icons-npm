import React from 'react';

export interface LanFaceWearyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWearyThin(props: LanFaceWearyThinProps): React.ReactElement;
export default LanFaceWearyThin;
