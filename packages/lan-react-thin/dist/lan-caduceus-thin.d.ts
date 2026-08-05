import React from 'react';

export interface LanCaduceusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaduceusThin(props: LanCaduceusThinProps): React.ReactElement;
export default LanCaduceusThin;
