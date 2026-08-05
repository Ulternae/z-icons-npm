import React from 'react';

export interface LanTrashCanListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanListThin(props: LanTrashCanListThinProps): React.ReactElement;
export default LanTrashCanListThin;
