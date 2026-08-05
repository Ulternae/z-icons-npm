import React from 'react';

export interface LanCannabisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannabis(props: LanCannabisProps): React.ReactElement;
export default LanCannabis;
