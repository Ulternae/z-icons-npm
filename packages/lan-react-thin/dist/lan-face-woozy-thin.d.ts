import React from 'react';

export interface LanFaceWoozyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWoozyThin(props: LanFaceWoozyThinProps): React.ReactElement;
export default LanFaceWoozyThin;
