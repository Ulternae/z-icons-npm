import React from 'react';

export interface LanCupStrawSwooshThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawSwooshThin(props: LanCupStrawSwooshThinProps): React.ReactElement;
export default LanCupStrawSwooshThin;
