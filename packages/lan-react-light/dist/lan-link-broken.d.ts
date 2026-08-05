import React from 'react';

export interface LanLinkBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkBroken(props: LanLinkBrokenProps): React.ReactElement;
export default LanLinkBroken;
