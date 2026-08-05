import React from 'react';

export interface LanCircleTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTrashThin(props: LanCircleTrashThinProps): React.ReactElement;
export default LanCircleTrashThin;
