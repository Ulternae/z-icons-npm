import React from 'react';

export interface LanChildrenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildrenSolid(props: LanChildrenSolidProps): React.ReactElement;
export default LanChildrenSolid;
