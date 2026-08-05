import React from 'react';

export interface LanLinkHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkHorizontalSolid(props: LanLinkHorizontalSolidProps): React.ReactElement;
export default LanLinkHorizontalSolid;
