import React from 'react';

export interface LanFaceConfoundedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceConfoundedThin(props: LanFaceConfoundedThinProps): React.ReactElement;
export default LanFaceConfoundedThin;
