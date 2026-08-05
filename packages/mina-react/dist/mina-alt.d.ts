import React from 'react';

export interface MinaAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlt(props: MinaAltProps): React.ReactElement;
export default MinaAlt;
