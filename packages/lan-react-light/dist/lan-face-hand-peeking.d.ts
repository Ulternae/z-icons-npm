import React from 'react';

export interface LanFaceHandPeekingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHandPeeking(props: LanFaceHandPeekingProps): React.ReactElement;
export default LanFaceHandPeeking;
