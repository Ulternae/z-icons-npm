import React from 'react';

export interface LanRssRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssRegular(props: LanRssRegularProps): React.ReactElement;
export default LanRssRegular;
