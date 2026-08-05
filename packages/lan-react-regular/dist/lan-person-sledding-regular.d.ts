import React from 'react';

export interface LanPersonSleddingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSleddingRegular(props: LanPersonSleddingRegularProps): React.ReactElement;
export default LanPersonSleddingRegular;
