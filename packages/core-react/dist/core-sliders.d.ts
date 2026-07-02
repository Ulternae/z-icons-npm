import React from 'react';

export interface CoreSlidersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSliders(props: CoreSlidersProps): React.ReactElement;
export default CoreSliders;
