import React from 'react';

export interface LanBlockBrickFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockBrickFireThin(props: LanBlockBrickFireThinProps): React.ReactElement;
export default LanBlockBrickFireThin;
