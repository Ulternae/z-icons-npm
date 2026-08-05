import React from 'react';

export interface CoreHourglassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHourglassSolid(props: CoreHourglassSolidProps): React.ReactElement;
export default CoreHourglassSolid;
