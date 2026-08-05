import React from 'react';

export interface LanShelvesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShelvesThin(props: LanShelvesThinProps): React.ReactElement;
export default LanShelvesThin;
