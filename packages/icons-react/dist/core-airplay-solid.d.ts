import React from 'react';

export interface CoreAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAirplaySolid: React.FC<CoreAirplaySolidProps>;
export default CoreAirplaySolid;
