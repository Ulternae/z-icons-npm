import React from 'react';

export interface LanFaceNauseatedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceNauseatedSolid(props: LanFaceNauseatedSolidProps): React.ReactElement;
export default LanFaceNauseatedSolid;
