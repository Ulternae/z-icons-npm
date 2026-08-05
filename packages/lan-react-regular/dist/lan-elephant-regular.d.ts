import React from 'react';

export interface LanElephantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElephantRegular(props: LanElephantRegularProps): React.ReactElement;
export default LanElephantRegular;
