import React from 'react';

export interface LanWindowFrameOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameOpenThin(props: LanWindowFrameOpenThinProps): React.ReactElement;
export default LanWindowFrameOpenThin;
