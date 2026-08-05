import React from 'react';

export interface MinaLayersThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersThree(props: MinaLayersThreeProps): React.ReactElement;
export default MinaLayersThree;
