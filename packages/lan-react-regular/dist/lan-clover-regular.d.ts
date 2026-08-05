import React from 'react';

export interface LanCloverRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloverRegular(props: LanCloverRegularProps): React.ReactElement;
export default LanCloverRegular;
