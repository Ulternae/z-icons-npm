import React from 'react';

export interface LanFaceHandPeekingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHandPeekingThin(props: LanFaceHandPeekingThinProps): React.ReactElement;
export default LanFaceHandPeekingThin;
