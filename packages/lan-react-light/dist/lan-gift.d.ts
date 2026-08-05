import React from 'react';

export interface LanGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGift(props: LanGiftProps): React.ReactElement;
export default LanGift;
