import React from 'react';

export interface LanUfoBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoBeamSolid(props: LanUfoBeamSolidProps): React.ReactElement;
export default LanUfoBeamSolid;
