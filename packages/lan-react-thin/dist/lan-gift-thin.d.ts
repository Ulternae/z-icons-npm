import React from 'react';

export interface LanGiftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftThin(props: LanGiftThinProps): React.ReactElement;
export default LanGiftThin;
