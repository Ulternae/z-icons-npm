import React from 'react';

export interface MinaLocationSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSnoozeSolid(props: MinaLocationSnoozeSolidProps): React.ReactElement;
export default MinaLocationSnoozeSolid;
