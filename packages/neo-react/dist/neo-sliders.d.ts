import React from 'react';

export interface NeoSlidersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSliders(props: NeoSlidersProps): React.ReactElement;
export default NeoSliders;
