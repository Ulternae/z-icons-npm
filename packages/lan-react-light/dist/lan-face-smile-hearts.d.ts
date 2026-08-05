import React from 'react';

export interface LanFaceSmileHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileHearts(props: LanFaceSmileHeartsProps): React.ReactElement;
export default LanFaceSmileHearts;
