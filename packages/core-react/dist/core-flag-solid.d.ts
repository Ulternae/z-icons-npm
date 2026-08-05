import React from 'react';

export interface CoreFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFlagSolid(props: CoreFlagSolidProps): React.ReactElement;
export default CoreFlagSolid;
