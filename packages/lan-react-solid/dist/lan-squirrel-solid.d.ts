import React from 'react';

export interface LanSquirrelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquirrelSolid(props: LanSquirrelSolidProps): React.ReactElement;
export default LanSquirrelSolid;
