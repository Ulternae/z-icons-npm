import React from 'react';

export interface LanTreeDecoratedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeDecoratedThin(props: LanTreeDecoratedThinProps): React.ReactElement;
export default LanTreeDecoratedThin;
