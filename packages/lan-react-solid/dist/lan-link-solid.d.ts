import React from 'react';

export interface LanLinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSolid(props: LanLinkSolidProps): React.ReactElement;
export default LanLinkSolid;
