import React from 'react';

export interface CoreGaugeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeSolid(props: CoreGaugeSolidProps): React.ReactElement;
export default CoreGaugeSolid;
