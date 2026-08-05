import React from 'react';

export interface LanTrashCanCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanCheckThin(props: LanTrashCanCheckThinProps): React.ReactElement;
export default LanTrashCanCheckThin;
