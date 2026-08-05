import React from 'react';

export interface LanStrikethroughRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrikethroughRegular(props: LanStrikethroughRegularProps): React.ReactElement;
export default LanStrikethroughRegular;
