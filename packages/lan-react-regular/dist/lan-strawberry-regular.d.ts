import React from 'react';

export interface LanStrawberryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrawberryRegular(props: LanStrawberryRegularProps): React.ReactElement;
export default LanStrawberryRegular;
