import React from 'react';

export interface LanOctagonCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonCheckRegular(props: LanOctagonCheckRegularProps): React.ReactElement;
export default LanOctagonCheckRegular;
