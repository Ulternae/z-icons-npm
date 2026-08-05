import React from 'react';

export interface LanEllipsisHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisHSolid(props: LanEllipsisHSolidProps): React.ReactElement;
export default LanEllipsisHSolid;
