import React from 'react';

export interface LanHatBeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatBeachSolid(props: LanHatBeachSolidProps): React.ReactElement;
export default LanHatBeachSolid;
