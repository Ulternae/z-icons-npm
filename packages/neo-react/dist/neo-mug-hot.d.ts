import React from 'react';

export interface NeoMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMugHot(props: NeoMugHotProps): React.ReactElement;
export default NeoMugHot;
