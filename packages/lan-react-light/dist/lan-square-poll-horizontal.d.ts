import React from 'react';

export interface LanSquarePollHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePollHorizontal(props: LanSquarePollHorizontalProps): React.ReactElement;
export default LanSquarePollHorizontal;
