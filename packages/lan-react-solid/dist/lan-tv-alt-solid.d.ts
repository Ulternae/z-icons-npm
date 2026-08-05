import React from 'react';

export interface LanTvAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvAltSolid(props: LanTvAltSolidProps): React.ReactElement;
export default LanTvAltSolid;
