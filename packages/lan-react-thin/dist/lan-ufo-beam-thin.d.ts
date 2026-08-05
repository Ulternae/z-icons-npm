import React from 'react';

export interface LanUfoBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoBeamThin(props: LanUfoBeamThinProps): React.ReactElement;
export default LanUfoBeamThin;
