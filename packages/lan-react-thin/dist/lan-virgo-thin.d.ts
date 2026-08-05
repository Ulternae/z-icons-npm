import React from 'react';

export interface LanVirgoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirgoThin(props: LanVirgoThinProps): React.ReactElement;
export default LanVirgoThin;
