import React from 'react';

export interface LanLinkBrokenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkBrokenSolid(props: LanLinkBrokenSolidProps): React.ReactElement;
export default LanLinkBrokenSolid;
