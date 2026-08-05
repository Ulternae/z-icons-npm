import React from 'react';

export interface LanTrashCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCheckSolid(props: LanTrashCheckSolidProps): React.ReactElement;
export default LanTrashCheckSolid;
