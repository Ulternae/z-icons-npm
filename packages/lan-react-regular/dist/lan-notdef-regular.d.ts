import React from 'react';

export interface LanNotdefRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotdefRegular(props: LanNotdefRegularProps): React.ReactElement;
export default LanNotdefRegular;
