import React from 'react';

export interface LanFaceLyingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLyingThin(props: LanFaceLyingThinProps): React.ReactElement;
export default LanFaceLyingThin;
