import React from 'react';

export interface BruFirstOrderAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFirstOrderAlt(props: BruFirstOrderAltProps): React.ReactElement;
export default BruFirstOrderAlt;
