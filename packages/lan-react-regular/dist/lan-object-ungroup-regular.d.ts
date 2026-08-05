import React from 'react';

export interface LanObjectUngroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUngroupRegular(props: LanObjectUngroupRegularProps): React.ReactElement;
export default LanObjectUngroupRegular;
