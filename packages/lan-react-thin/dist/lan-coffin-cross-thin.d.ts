import React from 'react';

export interface LanCoffinCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinCrossThin(props: LanCoffinCrossThinProps): React.ReactElement;
export default LanCoffinCrossThin;
