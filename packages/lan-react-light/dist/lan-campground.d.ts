import React from 'react';

export interface LanCampgroundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampground(props: LanCampgroundProps): React.ReactElement;
export default LanCampground;
