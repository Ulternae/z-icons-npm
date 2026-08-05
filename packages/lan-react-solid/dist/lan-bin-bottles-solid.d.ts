import React from 'react';

export interface LanBinBottlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinBottlesSolid(props: LanBinBottlesSolidProps): React.ReactElement;
export default LanBinBottlesSolid;
