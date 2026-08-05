import React from 'react';

export interface LanStrikethroughThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrikethroughThin(props: LanStrikethroughThinProps): React.ReactElement;
export default LanStrikethroughThin;
