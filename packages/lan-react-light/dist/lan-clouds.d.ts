import React from 'react';

export interface LanCloudsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClouds(props: LanCloudsProps): React.ReactElement;
export default LanClouds;
