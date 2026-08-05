import React from 'react';

export interface MinaMusicOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicOctagon(props: MinaMusicOctagonProps): React.ReactElement;
export default MinaMusicOctagon;
