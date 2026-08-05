import React from 'react';

export interface LanTrashCanPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanPlus(props: LanTrashCanPlusProps): React.ReactElement;
export default LanTrashCanPlus;
