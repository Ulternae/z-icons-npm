import React from 'react';

export interface LanScreencastRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScreencastRegular(props: LanScreencastRegularProps): React.ReactElement;
export default LanScreencastRegular;
