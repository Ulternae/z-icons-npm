import React from 'react';

export interface LanFaceUnamusedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceUnamusedThin(props: LanFaceUnamusedThinProps): React.ReactElement;
export default LanFaceUnamusedThin;
