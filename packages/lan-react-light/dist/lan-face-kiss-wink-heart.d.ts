import React from 'react';

export interface LanFaceKissWinkHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissWinkHeart(props: LanFaceKissWinkHeartProps): React.ReactElement;
export default LanFaceKissWinkHeart;
