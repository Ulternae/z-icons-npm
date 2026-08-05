import React from 'react';

export interface LanFaceCloudsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceClouds(props: LanFaceCloudsProps): React.ReactElement;
export default LanFaceClouds;
