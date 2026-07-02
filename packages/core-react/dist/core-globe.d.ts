import React from 'react';

export interface CoreGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGlobe(props: CoreGlobeProps): React.ReactElement;
export default CoreGlobe;
