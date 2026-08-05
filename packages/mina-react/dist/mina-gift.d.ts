import React from 'react';

export interface MinaGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGift(props: MinaGiftProps): React.ReactElement;
export default MinaGift;
