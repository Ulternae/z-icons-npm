import React from 'react';

export interface LanFlagPennantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagPennantThin(props: LanFlagPennantThinProps): React.ReactElement;
export default LanFlagPennantThin;
