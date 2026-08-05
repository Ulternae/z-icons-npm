import React from 'react';

export interface LanTrashListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashListThin(props: LanTrashListThinProps): React.ReactElement;
export default LanTrashListThin;
