import React from 'react';

export interface LanTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvRetroSolid(props: LanTvRetroSolidProps): React.ReactElement;
export default LanTvRetroSolid;
