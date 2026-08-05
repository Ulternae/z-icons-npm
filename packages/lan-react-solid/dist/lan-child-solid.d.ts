import React from 'react';

export interface LanChildSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildSolid(props: LanChildSolidProps): React.ReactElement;
export default LanChildSolid;
