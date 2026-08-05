import React from 'react';

export interface LanWandMagicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandMagicThin(props: LanWandMagicThinProps): React.ReactElement;
export default LanWandMagicThin;
