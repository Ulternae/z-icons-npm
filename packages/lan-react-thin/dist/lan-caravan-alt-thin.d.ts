import React from 'react';

export interface LanCaravanAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanAltThin(props: LanCaravanAltThinProps): React.ReactElement;
export default LanCaravanAltThin;
