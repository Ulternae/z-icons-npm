import React from 'react';

export interface LanPersonSleddingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSleddingThin(props: LanPersonSleddingThinProps): React.ReactElement;
export default LanPersonSleddingThin;
