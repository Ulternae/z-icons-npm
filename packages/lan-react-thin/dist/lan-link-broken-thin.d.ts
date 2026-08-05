import React from 'react';

export interface LanLinkBrokenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkBrokenThin(props: LanLinkBrokenThinProps): React.ReactElement;
export default LanLinkBrokenThin;
