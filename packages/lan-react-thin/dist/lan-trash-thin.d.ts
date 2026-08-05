import React from 'react';

export interface LanTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashThin(props: LanTrashThinProps): React.ReactElement;
export default LanTrashThin;
