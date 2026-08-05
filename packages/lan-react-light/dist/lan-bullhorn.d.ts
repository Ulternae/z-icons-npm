import React from 'react';

export interface LanBullhornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullhorn(props: LanBullhornProps): React.ReactElement;
export default LanBullhorn;
