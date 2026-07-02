import React from 'react';

export interface CoreMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMagnifyingGlass(props: CoreMagnifyingGlassProps): React.ReactElement;
export default CoreMagnifyingGlass;
