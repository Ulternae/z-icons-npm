import React from 'react';

export interface LanSquarePollVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePollVertical(props: LanSquarePollVerticalProps): React.ReactElement;
export default LanSquarePollVertical;
