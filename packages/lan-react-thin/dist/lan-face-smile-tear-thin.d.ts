import React from 'react';

export interface LanFaceSmileTearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileTearThin(props: LanFaceSmileTearThinProps): React.ReactElement;
export default LanFaceSmileTearThin;
