import React from 'react';

export interface MinaLayersOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersOne(props: MinaLayersOneProps): React.ReactElement;
export default MinaLayersOne;
