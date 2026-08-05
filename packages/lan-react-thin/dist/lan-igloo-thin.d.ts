import React from 'react';

export interface LanIglooThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIglooThin(props: LanIglooThinProps): React.ReactElement;
export default LanIglooThin;
