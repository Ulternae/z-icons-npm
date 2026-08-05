import React from 'react';

export interface MinaTwoOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoOctagon(props: MinaTwoOctagonProps): React.ReactElement;
export default MinaTwoOctagon;
