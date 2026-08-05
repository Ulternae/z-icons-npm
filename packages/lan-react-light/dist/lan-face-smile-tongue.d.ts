import React from 'react';

export interface LanFaceSmileTongueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileTongue(props: LanFaceSmileTongueProps): React.ReactElement;
export default LanFaceSmileTongue;
