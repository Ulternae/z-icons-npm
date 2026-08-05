import React from 'react';

export interface LanTrashCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCheckThin(props: LanTrashCheckThinProps): React.ReactElement;
export default LanTrashCheckThin;
