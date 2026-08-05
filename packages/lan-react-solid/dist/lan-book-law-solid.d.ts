import React from 'react';

export interface LanBookLawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookLawSolid(props: LanBookLawSolidProps): React.ReactElement;
export default LanBookLawSolid;
