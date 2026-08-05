import React from 'react';

export interface LanFaceViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceViewfinderThin(props: LanFaceViewfinderThinProps): React.ReactElement;
export default LanFaceViewfinderThin;
