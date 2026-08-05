import React from 'react';

export interface LanFaceSmilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmilePlus(props: LanFaceSmilePlusProps): React.ReactElement;
export default LanFaceSmilePlus;
