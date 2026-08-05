import React from 'react';

export interface LanFileVectorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVector(props: LanFileVectorProps): React.ReactElement;
export default LanFileVector;
