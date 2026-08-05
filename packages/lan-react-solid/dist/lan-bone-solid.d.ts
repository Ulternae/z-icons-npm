import React from 'react';

export interface LanBoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneSolid(props: LanBoneSolidProps): React.ReactElement;
export default LanBoneSolid;
