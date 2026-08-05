import React from 'react';

export interface NeoGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGlobe(props: NeoGlobeProps): React.ReactElement;
export default NeoGlobe;
