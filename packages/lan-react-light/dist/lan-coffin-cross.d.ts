import React from 'react';

export interface LanCoffinCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinCross(props: LanCoffinCrossProps): React.ReactElement;
export default LanCoffinCross;
