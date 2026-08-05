import React from 'react';

export interface LanNewspaperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNewspaperRegular(props: LanNewspaperRegularProps): React.ReactElement;
export default LanNewspaperRegular;
