import React from 'react';

export interface LanHouseChimneyHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyHeart(props: LanHouseChimneyHeartProps): React.ReactElement;
export default LanHouseChimneyHeart;
