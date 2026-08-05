import React from 'react';

export interface LanFaceSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileThin(props: LanFaceSmileThinProps): React.ReactElement;
export default LanFaceSmileThin;
