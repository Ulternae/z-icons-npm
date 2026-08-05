import React from 'react';

export interface LanFaceAngryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAngryThin(props: LanFaceAngryThinProps): React.ReactElement;
export default LanFaceAngryThin;
