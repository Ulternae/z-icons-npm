import React from 'react';

export interface LanPersonSleddingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSledding(props: LanPersonSleddingProps): React.ReactElement;
export default LanPersonSledding;
