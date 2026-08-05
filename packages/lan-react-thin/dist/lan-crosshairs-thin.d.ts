import React from 'react';

export interface LanCrosshairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsThin(props: LanCrosshairsThinProps): React.ReactElement;
export default LanCrosshairsThin;
