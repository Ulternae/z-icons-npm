import React from 'react';

export interface LanBorderNoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderNoneSolid(props: LanBorderNoneSolidProps): React.ReactElement;
export default LanBorderNoneSolid;
