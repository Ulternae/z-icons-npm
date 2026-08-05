import React from 'react';

export interface LanFaceSmileTearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileTear(props: LanFaceSmileTearProps): React.ReactElement;
export default LanFaceSmileTear;
