import React from 'react';

export interface LanBinRecycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinRecycleSolid(props: LanBinRecycleSolidProps): React.ReactElement;
export default LanBinRecycleSolid;
