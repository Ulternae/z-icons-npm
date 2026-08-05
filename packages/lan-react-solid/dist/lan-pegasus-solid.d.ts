import React from 'react';

export interface LanPegasusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPegasusSolid(props: LanPegasusSolidProps): React.ReactElement;
export default LanPegasusSolid;
