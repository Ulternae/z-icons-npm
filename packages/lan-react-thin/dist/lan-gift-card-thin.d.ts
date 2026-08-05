import React from 'react';

export interface LanGiftCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftCardThin(props: LanGiftCardThinProps): React.ReactElement;
export default LanGiftCardThin;
