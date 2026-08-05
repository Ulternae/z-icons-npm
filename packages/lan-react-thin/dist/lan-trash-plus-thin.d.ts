import React from 'react';

export interface LanTrashPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashPlusThin(props: LanTrashPlusThinProps): React.ReactElement;
export default LanTrashPlusThin;
