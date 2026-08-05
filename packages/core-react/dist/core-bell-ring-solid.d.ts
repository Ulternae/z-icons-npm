import React from 'react';

export interface CoreBellRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellRingSolid(props: CoreBellRingSolidProps): React.ReactElement;
export default CoreBellRingSolid;
