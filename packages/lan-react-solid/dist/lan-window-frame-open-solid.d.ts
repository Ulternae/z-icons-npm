import React from 'react';

export interface LanWindowFrameOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameOpenSolid(props: LanWindowFrameOpenSolidProps): React.ReactElement;
export default LanWindowFrameOpenSolid;
