import React from 'react';

export interface LanEllipsisVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisVSolid(props: LanEllipsisVSolidProps): React.ReactElement;
export default LanEllipsisVSolid;
