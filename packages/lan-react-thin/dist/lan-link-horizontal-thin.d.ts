import React from 'react';

export interface LanLinkHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkHorizontalThin(props: LanLinkHorizontalThinProps): React.ReactElement;
export default LanLinkHorizontalThin;
