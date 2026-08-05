import React from 'react';

export interface LanHandsWashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsWashSolid(props: LanHandsWashSolidProps): React.ReactElement;
export default LanHandsWashSolid;
