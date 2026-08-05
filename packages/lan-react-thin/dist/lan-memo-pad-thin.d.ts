import React from 'react';

export interface LanMemoPadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoPadThin(props: LanMemoPadThinProps): React.ReactElement;
export default LanMemoPadThin;
