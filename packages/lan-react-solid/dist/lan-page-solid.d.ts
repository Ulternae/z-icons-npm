import React from 'react';

export interface LanPageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPageSolid(props: LanPageSolidProps): React.ReactElement;
export default LanPageSolid;
