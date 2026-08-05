import React from 'react';

export interface LanShieldHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldHeart(props: LanShieldHeartProps): React.ReactElement;
export default LanShieldHeart;
