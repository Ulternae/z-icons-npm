import React from 'react';

export interface MinaTreePineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreePine(props: MinaTreePineProps): React.ReactElement;
export default MinaTreePine;
