import React from 'react';

export interface LanCubeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubeThin(props: LanCubeThinProps): React.ReactElement;
export default LanCubeThin;
