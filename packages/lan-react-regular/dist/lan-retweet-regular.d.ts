import React from 'react';

export interface LanRetweetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRetweetRegular(props: LanRetweetRegularProps): React.ReactElement;
export default LanRetweetRegular;
