import React from 'react';

export interface LanEjectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEjectThin(props: LanEjectThinProps): React.ReactElement;
export default LanEjectThin;
