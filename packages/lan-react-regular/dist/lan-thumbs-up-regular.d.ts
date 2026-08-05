import React from 'react';

export interface LanThumbsUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsUpRegular(props: LanThumbsUpRegularProps): React.ReactElement;
export default LanThumbsUpRegular;
