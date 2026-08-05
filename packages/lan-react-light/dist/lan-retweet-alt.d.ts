import React from 'react';

export interface LanRetweetAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRetweetAlt(props: LanRetweetAltProps): React.ReactElement;
export default LanRetweetAlt;
