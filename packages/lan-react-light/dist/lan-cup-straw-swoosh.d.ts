import React from 'react';

export interface LanCupStrawSwooshProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawSwoosh(props: LanCupStrawSwooshProps): React.ReactElement;
export default LanCupStrawSwoosh;
