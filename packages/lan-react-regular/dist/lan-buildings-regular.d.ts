import React from 'react';

export interface LanBuildingsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingsRegular(props: LanBuildingsRegularProps): React.ReactElement;
export default LanBuildingsRegular;
