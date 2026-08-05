import React from 'react';

export interface LanFaceGrinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinThin(props: LanFaceGrinThinProps): React.ReactElement;
export default LanFaceGrinThin;
