import React from 'react';

export interface LanSnowmanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowman(props: LanSnowmanProps): React.ReactElement;
export default LanSnowman;
