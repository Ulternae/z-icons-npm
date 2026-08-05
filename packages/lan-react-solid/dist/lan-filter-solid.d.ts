import React from 'react';

export interface LanFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterSolid(props: LanFilterSolidProps): React.ReactElement;
export default LanFilterSolid;
