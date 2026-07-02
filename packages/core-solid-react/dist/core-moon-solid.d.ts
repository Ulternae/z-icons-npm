import React from 'react';

export interface CoreMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoonSolid(props: CoreMoonSolidProps): React.ReactElement;
export default CoreMoonSolid;
