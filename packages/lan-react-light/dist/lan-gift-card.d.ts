import React from 'react';

export interface LanGiftCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftCard(props: LanGiftCardProps): React.ReactElement;
export default LanGiftCard;
