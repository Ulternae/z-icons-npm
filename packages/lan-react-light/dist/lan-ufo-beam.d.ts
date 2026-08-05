import React from 'react';

export interface LanUfoBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoBeam(props: LanUfoBeamProps): React.ReactElement;
export default LanUfoBeam;
