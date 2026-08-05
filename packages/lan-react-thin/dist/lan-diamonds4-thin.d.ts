import React from 'react';

export interface LanDiamonds4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamonds4Thin(props: LanDiamonds4ThinProps): React.ReactElement;
export default LanDiamonds4Thin;
