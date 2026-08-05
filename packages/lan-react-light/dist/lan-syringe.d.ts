import React from 'react';

export interface LanSyringeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSyringe(props: LanSyringeProps): React.ReactElement;
export default LanSyringe;
