import React from 'react';

export interface LanThListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThListRegular(props: LanThListRegularProps): React.ReactElement;
export default LanThListRegular;
