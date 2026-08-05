import React from 'react';

export interface LanHurricaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHurricane(props: LanHurricaneProps): React.ReactElement;
export default LanHurricane;
