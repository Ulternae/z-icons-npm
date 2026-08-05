import React from 'react';

export interface LanLocationCrosshairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationCrosshairsThin(props: LanLocationCrosshairsThinProps): React.ReactElement;
export default LanLocationCrosshairsThin;
