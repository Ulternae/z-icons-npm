import React from 'react';

export interface CoreGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGift(props: CoreGiftProps): React.ReactElement;
export default CoreGift;
