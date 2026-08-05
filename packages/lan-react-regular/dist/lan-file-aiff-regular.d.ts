import React from 'react';

export interface LanFileAiffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAiffRegular(props: LanFileAiffRegularProps): React.ReactElement;
export default LanFileAiffRegular;
