import React from 'react';

export interface MinaGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGlobe(props: MinaGlobeProps): React.ReactElement;
export default MinaGlobe;
