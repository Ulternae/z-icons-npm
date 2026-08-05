import React from 'react';

export interface LanAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorSolid(props: LanAnchorSolidProps): React.ReactElement;
export default LanAnchorSolid;
