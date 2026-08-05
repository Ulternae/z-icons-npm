import React from 'react';

export interface LanListAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListAltThin(props: LanListAltThinProps): React.ReactElement;
export default LanListAltThin;
