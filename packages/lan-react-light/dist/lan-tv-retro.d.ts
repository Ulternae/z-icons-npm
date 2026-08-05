import React from 'react';

export interface LanTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvRetro(props: LanTvRetroProps): React.ReactElement;
export default LanTvRetro;
