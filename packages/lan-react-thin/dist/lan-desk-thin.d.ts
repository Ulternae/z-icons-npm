import React from 'react';

export interface LanDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeskThin(props: LanDeskThinProps): React.ReactElement;
export default LanDeskThin;
