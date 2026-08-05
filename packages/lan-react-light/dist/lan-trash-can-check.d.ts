import React from 'react';

export interface LanTrashCanCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanCheck(props: LanTrashCanCheckProps): React.ReactElement;
export default LanTrashCanCheck;
