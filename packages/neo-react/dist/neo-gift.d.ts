import React from 'react';

export interface NeoGiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGift(props: NeoGiftProps): React.ReactElement;
export default NeoGift;
