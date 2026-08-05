import React from 'react';

export interface LanThumbsDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsDownRegular(props: LanThumbsDownRegularProps): React.ReactElement;
export default LanThumbsDownRegular;
