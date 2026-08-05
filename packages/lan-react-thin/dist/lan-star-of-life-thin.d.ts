import React from 'react';

export interface LanStarOfLifeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarOfLifeThin(props: LanStarOfLifeThinProps): React.ReactElement;
export default LanStarOfLifeThin;
