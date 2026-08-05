import React from 'react';

export interface LanTrashPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashPlusSolid(props: LanTrashPlusSolidProps): React.ReactElement;
export default LanTrashPlusSolid;
