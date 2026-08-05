import React from 'react';

export interface CoreMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMagnifyingGlassSolid(props: CoreMagnifyingGlassSolidProps): React.ReactElement;
export default CoreMagnifyingGlassSolid;
