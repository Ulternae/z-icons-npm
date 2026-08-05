import React from 'react';

export interface LanBarProgressEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressEmpty(props: LanBarProgressEmptyProps): React.ReactElement;
export default LanBarProgressEmpty;
