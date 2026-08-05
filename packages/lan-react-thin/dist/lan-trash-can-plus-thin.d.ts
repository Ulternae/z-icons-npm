import React from 'react';

export interface LanTrashCanPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanPlusThin(props: LanTrashCanPlusThinProps): React.ReactElement;
export default LanTrashCanPlusThin;
