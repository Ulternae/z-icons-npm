import React from 'react';

export interface LanTableLayoutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableLayoutSolid(props: LanTableLayoutSolidProps): React.ReactElement;
export default LanTableLayoutSolid;
