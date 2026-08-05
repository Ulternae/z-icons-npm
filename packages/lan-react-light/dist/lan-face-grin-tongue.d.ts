import React from 'react';

export interface LanFaceGrinTongueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinTongue(props: LanFaceGrinTongueProps): React.ReactElement;
export default LanFaceGrinTongue;
