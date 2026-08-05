import React from 'react';

export interface LanFaceGrinHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinHearts(props: LanFaceGrinHeartsProps): React.ReactElement;
export default LanFaceGrinHearts;
