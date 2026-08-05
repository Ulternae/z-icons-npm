import React from 'react';

export interface LanKaabaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKaaba(props: LanKaabaProps): React.ReactElement;
export default LanKaaba;
