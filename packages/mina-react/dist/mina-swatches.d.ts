import React from 'react';

export interface MinaSwatchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSwatches(props: MinaSwatchesProps): React.ReactElement;
export default MinaSwatches;
