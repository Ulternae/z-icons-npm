import React from 'react';

export interface LanLoaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLoaderRegular(props: LanLoaderRegularProps): React.ReactElement;
export default LanLoaderRegular;
