import React from 'react';

export interface LanStoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoolRegular(props: LanStoolRegularProps): React.ReactElement;
export default LanStoolRegular;
