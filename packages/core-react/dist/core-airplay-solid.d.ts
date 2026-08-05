import React from 'react';

export interface CoreAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAirplaySolid(props: CoreAirplaySolidProps): React.ReactElement;
export default CoreAirplaySolid;
