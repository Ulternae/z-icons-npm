import React from 'react';

export interface LanRetweetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRetweet(props: LanRetweetProps): React.ReactElement;
export default LanRetweet;
