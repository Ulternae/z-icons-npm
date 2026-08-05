import React from 'react';

export interface LanDreidelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDreidelSolid(props: LanDreidelSolidProps): React.ReactElement;
export default LanDreidelSolid;
