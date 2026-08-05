import React from 'react';

export interface LanSnowmobileBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowmobileBlank(props: LanSnowmobileBlankProps): React.ReactElement;
export default LanSnowmobileBlank;
