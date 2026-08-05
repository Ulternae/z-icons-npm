import React from 'react';

export interface LanHardHatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardHatThin(props: LanHardHatThinProps): React.ReactElement;
export default LanHardHatThin;
