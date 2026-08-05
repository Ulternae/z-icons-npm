import React from 'react';

export interface CorePaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaletteSolid(props: CorePaletteSolidProps): React.ReactElement;
export default CorePaletteSolid;
