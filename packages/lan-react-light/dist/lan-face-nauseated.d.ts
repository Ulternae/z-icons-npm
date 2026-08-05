import React from 'react';

export interface LanFaceNauseatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceNauseated(props: LanFaceNauseatedProps): React.ReactElement;
export default LanFaceNauseated;
