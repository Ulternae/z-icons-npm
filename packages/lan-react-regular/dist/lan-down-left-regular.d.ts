import React from 'react';

export interface LanDownLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLeftRegular(props: LanDownLeftRegularProps): React.ReactElement;
export default LanDownLeftRegular;
