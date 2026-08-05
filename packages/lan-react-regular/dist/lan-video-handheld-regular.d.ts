import React from 'react';

export interface LanVideoHandheldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoHandheldRegular(props: LanVideoHandheldRegularProps): React.ReactElement;
export default LanVideoHandheldRegular;
