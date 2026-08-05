import React from 'react';

export interface LanCloseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloseRegular(props: LanCloseRegularProps): React.ReactElement;
export default LanCloseRegular;
