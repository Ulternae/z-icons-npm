import React from 'react';

export interface LanFaceSmilePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmilePlusThin(props: LanFaceSmilePlusThinProps): React.ReactElement;
export default LanFaceSmilePlusThin;
