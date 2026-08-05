import React from 'react';

export interface LanTreeDecoratedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeDecoratedRegular(props: LanTreeDecoratedRegularProps): React.ReactElement;
export default LanTreeDecoratedRegular;
