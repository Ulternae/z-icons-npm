import React from 'react';

export interface LanTreeLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeLargeThin(props: LanTreeLargeThinProps): React.ReactElement;
export default LanTreeLargeThin;
