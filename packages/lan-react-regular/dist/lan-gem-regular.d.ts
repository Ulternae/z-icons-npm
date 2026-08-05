import React from 'react';

export interface LanGemRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGemRegular(props: LanGemRegularProps): React.ReactElement;
export default LanGemRegular;
