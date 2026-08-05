import React from 'react';

export interface LanFaceLaughBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughBeamThin(props: LanFaceLaughBeamThinProps): React.ReactElement;
export default LanFaceLaughBeamThin;
