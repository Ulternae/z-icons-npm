import React from 'react';

export interface LanBullhornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullhornThin(props: LanBullhornThinProps): React.ReactElement;
export default LanBullhornThin;
