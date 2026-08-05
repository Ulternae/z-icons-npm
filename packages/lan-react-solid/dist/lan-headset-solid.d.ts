import React from 'react';

export interface LanHeadsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadsetSolid(props: LanHeadsetSolidProps): React.ReactElement;
export default LanHeadsetSolid;
