import React from 'react';

export interface LanLinkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkThin(props: LanLinkThinProps): React.ReactElement;
export default LanLinkThin;
