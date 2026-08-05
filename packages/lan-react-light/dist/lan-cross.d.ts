import React from 'react';

export interface LanCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCross(props: LanCrossProps): React.ReactElement;
export default LanCross;
